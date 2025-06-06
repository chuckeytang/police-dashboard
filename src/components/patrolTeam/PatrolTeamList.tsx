import React, { useState, useEffect } from "react";
import axios from "axios";
import { ExportButton, List, useListContext } from "react-admin";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { AiOutlinePlusCircle as AddIcon } from "react-icons/ai";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List as MuiList,
  ListItem,
  ListItemText,
  Grid,
  CircularProgress,
} from "@mui/material";
import { Staff, PatrolTeam, Vehicle, PatrolStaffAssignment } from "@/types";
import { enqueueSnackbar } from "notistack";
import ConfirmDialog from "../common/ConfirmDialog";
import { MESSAGES } from "@/app/api/errorMessages";
const PatrolTeamDetails = ({
  team,
  onTeamUpdate,
}: {
  team: PatrolTeam | null;
  onTeamUpdate: (updatedTeam: PatrolTeam) => void;
}) => {
  const [vehicle, setVehicle] = useState<Vehicle | null>(
    team?.patrol_vehicle_assignments
      ? team?.patrol_vehicle_assignments[0]?.vehicle || null
      : null
  );
  const [members, setMembers] = useState<PatrolStaffAssignment[]>(
    team?.patrol_staff_assignments || []
  );
  const [selectedVehicleId, setSelectedVehicleId] = useState<number>(0);
  const [selectedMemberId, setSelectedMemberId] = useState<{
    [key: string]: number;
  }>({
    早班: 0,
    中班: 0,
    晚班: 0,
  });
  const [shift, setShift] = useState<string>("早班");

  const [allStaffs, setAllStaffs] = useState<Staff[]>([]);
  const [allVehicles, setAllVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    // 获取所有的工作人员列表，用于下拉菜单
    const fetchStaffs = async () => {
      const response = await axios.get("/api/personnel/staff/search");
      setAllStaffs(response.data.data);
    };

    // 获取所有的车辆列表，用于下拉菜单
    const fetchVehicles = async () => {
      const response = await axios.get("/api/vehicle/vehicle/search");
      setAllVehicles(response.data.data);
    };

    fetchStaffs();
    fetchVehicles();
  }, []);

  useEffect(() => {
    // 更新 members 和 vehicle 状态
    if (team) {
      setMembers(team.patrol_staff_assignments || []);
      setVehicle(
        team.patrol_vehicle_assignments
          ? team.patrol_vehicle_assignments[0]?.vehicle || null
          : null
      );
    }
  }, [team]);

  const handleVehicleChange = async (newVehicleId: number) => {
    if (!team) return;

    try {
      const response = await axios.patch(
        `/api/vehicle/patrolTeam/update/${team.id}`,
        {
          vehicle_id: newVehicleId,
        }
      );
      onTeamUpdate(response.data);
      setVehicle(
        response.data.patrol_vehicle_assignments[0]?.vehicle.plate_number
      ); // 更新 vehicle 车牌号
    } catch (error) {
      console.error("Failed to update vehicle:", error);
    }
  };

  const handleDeleteMember = async (memberId: number, shift: string) => {
    if (!team) return;

    try {
      const response = await axios.patch(
        `/api/vehicle/patrolTeam/update/${team.id}/deleteMember`,
        {
          member_id: memberId,
          shift: shift,
        }
      );
      onTeamUpdate(response.data);
      setMembers(response.data.patrol_staff_assignments); // 更新 members 列表
    } catch (error) {
      console.error("Failed to delete member:", error);
    }
  };

  const handleAddMember = async (newMemberId: number, shift: string) => {
    if (!team) return;

    try {
      const response = await axios.patch(
        `/api/vehicle/patrolTeam/update/${team.id}/addMember`,
        {
          member_id: newMemberId,
          shift: shift,
        }
      );
      onTeamUpdate(response.data);
      setMembers(response.data.patrol_staff_assignments); // 更新 members 列表
      setSelectedMemberId((prev) => ({
        ...prev,
        [shift]: 0,
      }));
    } catch (error) {
      console.error("Failed to add member:", error);
    }
  };

  if (!team) {
    return <p>请选择一个巡逻组以查看详细信息</p>;
  }
  return (
    <div className="flex flex-col">
      <h4 className="mb-6">{team.team_name}</h4>
      <div className="flex">
        <div>
          <h6>巡逻车辆</h6>
          <Card variant="outlined" className="mb-6">
            <CardContent className="w-[200px]">
              {vehicle ? (
                <div>
                  <p>
                    {vehicle.brand_model} ({vehicle.plate_number})
                  </p>
                </div>
              ) : (
                <div>
                  <p>无车辆信息</p>
                </div>
              )}
              <TextField
                label="选择车辆"
                select
                value={selectedVehicleId}
                onChange={(e) => {
                  const newVehicleId = parseInt(e.target.value, 10);
                  setSelectedVehicleId(newVehicleId);
                  handleVehicleChange(newVehicleId);
                }}
                SelectProps={{
                  native: true,
                }}
              >
                <option value="">选择一辆车辆</option>
                {allVehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.brand_model} ({vehicle.plate_number})
                  </option>
                ))}
              </TextField>
            </CardContent>
          </Card>
        </div>

        <div className="ml-6">
          <h6>巡逻人员</h6>
          <div className="flex">
            {["早班", "中班", "晚班"].map((shift) => (
              <div key={shift} className="mr-4">
                <div>{shift}</div>
                <div>
                  {members
                    .filter((member) => member.shift === shift)
                    .map((member) => (
                      <Grid item xs={12} sm={6} md={4} key={member.id}>
                        <Card
                          variant="outlined"
                          className="flex justify-between"
                        >
                          <CardContent>
                            <p>
                              {member.staff.name} ({member.staff.police_number})
                            </p>
                            <p>{member.staff.department}</p>
                          </CardContent>
                          <IconButton
                            aria-label="delete"
                            onClick={() =>
                              handleDeleteMember(member.staff.id, shift)
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Card>
                      </Grid>
                    ))}
                  <div className="flex">
                    <TextField
                      label="选择成员"
                      select
                      value={selectedMemberId[shift]}
                      onChange={(e) => {
                        const newMemberId = parseInt(e.target.value, 10);
                        setSelectedMemberId((prev) => ({
                          ...prev,
                          [shift]: newMemberId,
                        }));
                      }}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      <option value="">选择一个成员</option>
                      {allStaffs.map((staff) => (
                        <option key={staff.id} value={staff.id}>
                          {staff.name}
                        </option>
                      ))}
                    </TextField>
                    <Button
                      onClick={() =>
                        handleAddMember(selectedMemberId[shift], shift)
                      }
                    >
                      添加
                      <AddIcon />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PatrolTeamList = () => {
  const [selectedTeam, setSelectedTeam] = useState<PatrolTeam | null>(null);
  const [open, setOpen] = useState(false);
  const [newTeamName, setNewTeamName] = useState("");
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [teamIdToDelete, setTeamIdToDelete] = useState<number | null>(null);
  const { data, total, isLoading, error, refetch } =
    useListContext<PatrolTeam>();

  if (error) return <div color="error">加载数据时出错: {error.message}</div>;
  if (isLoading) return <CircularProgress />;

  const handleOpenConfirmDialog = (teamId: number) => {
    setTeamIdToDelete(teamId);
    setConfirmDialogOpen(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewTeamName("");
  };

  const handleAddTeam = async () => {
    try {
      const response = await axios.post("/api/vehicle/patrolTeam/add", {
        team_name: newTeamName,
      });
      refetch(); // 重新获取数据
      handleClose();
    } catch (error) {
      console.error("Failed to add team:", error);
    }
  };

  const handleDeleteTeam = async () => {
    if (teamIdToDelete === null) return;

    try {
      const response = await axios.delete(`/api/vehicle/patrolTeam/delete`, {
        data: { patrol_team_id: teamIdToDelete },
      });
      refetch();
      enqueueSnackbar(response.data.message, { variant: "success" });
    } catch (error: any) {
      enqueueSnackbar(error.body.error, { variant: "error" });
    } finally {
      setConfirmDialogOpen(false);
      setTeamIdToDelete(null);
    }
  };

  return (
    <div className="flex">
      <div className="border-r border-gray-200 p-4">
        <div className="flex justify-between items-center mb-4">
          <div style={{ display: "inline" }}>巡逻组目录 </div>
          <Button onClick={handleClickOpen}>
            <AddIcon />
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>添加新的巡逻组</DialogTitle>
            <DialogContent>
              <DialogContentText>请输入新的巡逻组名称。</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                label="巡逻组名称"
                fullWidth
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                取消
              </Button>
              <Button onClick={handleAddTeam} color="primary">
                确定
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <MuiList>
          {data ? (
            data.map((team) => (
              <ListItem
                key={team.id}
                button
                selected={selectedTeam?.id === team.id}
                onClick={() => setSelectedTeam(team)}
              >
                <ListItemText primary={team.team_name} />
                <IconButton
                  aria-label="delete"
                  onClick={() => handleOpenConfirmDialog(team.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="没有数据" />
            </ListItem>
          )}
        </MuiList>
      </div>
      <div className="flex p-4">
        <PatrolTeamDetails
          team={selectedTeam}
          onTeamUpdate={(updatedTeam) => {
            // 更新当前选中的团队数据
            if (selectedTeam && selectedTeam.id === updatedTeam.id) {
              setSelectedTeam(updatedTeam);
            }
            // 重新获取列表数据
            refetch();
          }}
        />
      </div>
      <ConfirmDialog
        open={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
        title={MESSAGES.DELETE_PATROL_TEAM}
        message={MESSAGES.CONFIRM_DELETE_PATROL_TEAM}
        onConfirm={handleDeleteTeam}
      />
    </div>
  );
};

const PatrolTeamListWrapper = () => (
  <List actions={false}>
    <PatrolTeamList />
  </List>
);

export default PatrolTeamListWrapper;
