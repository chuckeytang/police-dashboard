import React, { useState, useEffect } from "react";
import {
  List,
  useListContext,
  Loading,
  Filter,
  TextInput,
  FilterProps,
} from "react-admin";
import {
  Card,
  CardContent,
  Button,
  List as MuiList,
  ListItem,
  ListItemText,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  InputLabel,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { Staff, Team } from "@/types";
import DeleteIcon from "@mui/icons-material/Delete"; // 需要添加这个导入
import { CustomExportButton } from "../common/CustomButtons";

const TeamDetails = ({
  team,
  onTeamUpdate,
}: {
  team: Team | null;
  onTeamUpdate: (updatedTeam: Team) => void;
}) => {
  const [leader, setLeader] = useState<string | null>(
    team?.leader?.name || null
  );
  const [members, setMembers] = useState<Staff[]>(team?.members || []);
  const [selectedLeaderId, setSelectedLeaderId] = useState<number>(0);
  const [selectedMemberId, setSelectedMemberId] = useState<number>(0);

  const [allStaffs, setAllStaffs] = useState<Staff[]>([]);

  useEffect(() => {
    // 获取所有的工作人员列表，用于下拉菜单
    const fetchStaffs = async () => {
      const response = await axios.get("/api/personnel/staff/search");
      setAllStaffs(response.data);
    };

    fetchStaffs();
  }, []);

  useEffect(() => {
    // 更新 members 状态
    if (team && team.members) {
      setMembers(team.members);
    }
  }, [team]);

  const handleLeaderChange = async (newLeaderId: number) => {
    if (!team) return;

    try {
      const response = await axios.patch(
        `/api/personnel/team/update/${team.id}`,
        {
          leader_id: newLeaderId,
        }
      );
      onTeamUpdate(response.data);
      setLeader(response.data.leader.name); // 更新 leader 名称
    } catch (error) {
      console.error("Failed to update leader:", error);
    }
  };

  const handleAddMember = async (newMemberId: number) => {
    if (!team) return;

    try {
      const response = await axios.patch(
        `/api/personnel/team/update/${team.id}/addMember`,
        {
          member_id: newMemberId,
        }
      );
      onTeamUpdate(response.data);
      setMembers(response.data.members); // 更新 members 列表
    } catch (error) {
      console.error("Failed to add member:", error);
    }
  };

  const handleDeleteMember = async (memberId: number) => {
    if (!team) return;

    try {
      const response = await axios.patch(
        `/api/personnel/team/update/${team.id}/deleteMember`,
        {
          member_id: memberId,
        }
      );
      onTeamUpdate(response.data);
      setMembers(response.data.members); // 更新 members 列表
    } catch (error) {
      console.error("Failed to delete member:", error);
    }
  };

  if (!team) {
    return <p>请选择一个班级以查看详细信息</p>;
  }

  return (
    <div className="flex">
      <div>
        <h4 className="mb-6">{team.team_name}</h4>
        <h6>值班班长</h6>
        <Card variant="outlined" className="mb-6">
          <CardContent className="w-[200px]">
            {team.leader ? (
              <div>
                <p>
                  {team.leader.name} ({team.leader.police_number})
                </p>
                <p>{team.leader.position}</p>
                <p>{team.leader.department}</p>
                <p>{team.leader.contact}</p>
              </div>
            ) : (
              <div>
                <p>无班长信息</p>
              </div>
            )}
            <TextField
              label="选择班长"
              select
              value={selectedLeaderId}
              onChange={(e) => {
                const newLeaderId = parseInt(e.target.value, 10);
                setSelectedLeaderId(newLeaderId);
                handleLeaderChange(newLeaderId);
              }}
              SelectProps={{
                native: true,
              }}
            >
              <option value="">选择一个班长</option>
              {allStaffs.map((staff) => (
                <option key={staff.id} value={staff.id}>
                  {staff.name}
                </option>
              ))}
            </TextField>
          </CardContent>
        </Card>
      </div>
      <div className="ml-6 w-60">
        <h6>值班人员</h6>
        <div>
          {members.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card variant="outlined">
                <CardContent>
                  <div className="flex justify-between">
                    <div>
                      <p>
                        {member.name} ({member.police_number})
                      </p>
                      <p>{member.position}</p>
                      <p>{member.department}</p>
                      <p>{member.contact}</p>
                    </div>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDeleteMember(member.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <div className="flex flex-col">
            <Button
              variant="contained"
              onClick={() => handleAddMember(selectedMemberId)}
            >
              添加成员
            </Button>
            <TextField
              label="选择成员"
              select
              value={selectedMemberId}
              onChange={(e) => {
                const newMemberId = parseInt(e.target.value, 10);
                setSelectedMemberId(newMemberId);
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
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamList = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [open, setOpen] = useState(false);
  const [newTeamName, setNewTeamName] = useState("");
  const { data, total, isLoading, error, refetch } = useListContext<Team>();

  if (error) return <div color="error">加载数据时出错: {error.message}</div>;
  if (isLoading) return <Loading />;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewTeamName("");
  };

  const handleAddTeam = async () => {
    try {
      const response = await axios.post("/api/personnel/team/add", {
        team_name: newTeamName,
      });
      refetch(); // 重新获取数据
      handleClose();
    } catch (error) {
      console.error("Failed to add team:", error);
    }
  };

  return (
    <div className="flex">
      <div className="border-r border-gray-200 p-4">
        <div className="flex justify-between items-center mb-4">
          <div style={{ display: "inline" }}>班组目录 </div>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleClickOpen}
          >
            <div className="text-white">+</div>
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>添加新的班组</DialogTitle>
            <DialogContent>
              <DialogContentText>请输入新的班组名称。</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                label="班组名称"
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
          {data.map((team) => (
            <ListItem
              key={team.id}
              button
              selected={selectedTeam?.id === team.id}
              onClick={() => setSelectedTeam(team)}
            >
              <ListItemText primary={team.team_name} />
            </ListItem>
          ))}
        </MuiList>
      </div>
      <div className="flex-1 p-4">
        <TeamDetails
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
    </div>
  );
};

const TeamListWrapper = () => (
  <List>
    <TeamList />
    <CustomExportButton />
  </List>
);

export default TeamListWrapper;
