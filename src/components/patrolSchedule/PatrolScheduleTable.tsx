import React, { useState, useEffect } from "react";
import { List, useListContext } from "react-admin";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import PatrolScheduleList from "./PatrolScheduleList"; // 确保导入路径正确
import { PatrolTeam, PatrolSchedule } from "@/types";
import ConfirmDialog from "../common/ConfirmDialog";
import { MESSAGES } from "@/app/api/errorMessages";

const PatrolScheduleTable = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [allTeams, setAllTeams] = useState<PatrolTeam[]>([]);
  const { refetch } = useListContext<PatrolSchedule>();

  useEffect(() => {
    // 获取所有的巡逻组
    const fetchTeams = async () => {
      const response = await axios.get("/api/vehicle/patrolTeam/search");
      setAllTeams(response.data.data);
    };

    fetchTeams();
  }, []);

  const handleAddSchedule = async () => {
    try {
      if (selectedDate) {
        const localDate = `${selectedDate.getFullYear()}-${(
          selectedDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${selectedDate
          .getDate()
          .toString()
          .padStart(2, "0")}`;

        const response = await axios.post("/api/vehicle/patrolSchedule/add", {
          schedule_date: localDate,
          patrol_team_id: selectedTeam,
        });
      }
      setDialogOpen(false);
      refetch();
    } catch (error) {
      console.error("Failed to add schedule:", error);
    }
  };

  const handleDeleteSchedule = async () => {
    try {
      if (selectedDate) {
        const localDate = `${selectedDate.getFullYear()}-${(
          selectedDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${selectedDate
          .getDate()
          .toString()
          .padStart(2, "0")}`;

        await axios.delete("/api/vehicle/patrolSchedule/delete", {
          data: { schedule_date: localDate },
        });
      }
      setConfirmDialogOpen(false);
      refetch();
    } catch (error) {
      console.error("Failed to delete schedule:", error);
    }
  };

  return (
    <div>
      <PatrolScheduleList
        onRefetch={refetch}
        setSelectedDate={setSelectedDate}
        setDialogOpen={setDialogOpen}
        setConfirmDialogOpen={setConfirmDialogOpen}
      />
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>添加排班</DialogTitle>
        <DialogContent className="flex flex-col">
          <TextField
            select
            label="选择巡逻组"
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="w-[200px]"
          >
            {allTeams.map((team) => (
              <MenuItem key={team.id} value={team.id}>
                {team.team_name}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            取消
          </Button>
          <Button onClick={handleAddSchedule} color="primary">
            确定
          </Button>
        </DialogActions>
      </Dialog>
      <ConfirmDialog
        open={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
        title={MESSAGES.DELETE_SCHEDULE}
        message={MESSAGES.CONFIRM_DELETE_PATROL_SCHDULE}
        onConfirm={handleDeleteSchedule}
      />
    </div>
  );
};

const PatrolScheduleTableWrapper = () => {
  const filter = {
    start: new Date().toISOString().split("T")[0],
    end: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
  };
  return (
    <List filter={filter} pagination={false} empty={false} actions={false}>
      <PatrolScheduleTable />
    </List>
  );
};

export default PatrolScheduleTableWrapper;
