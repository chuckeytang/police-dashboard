import React, { useState, useEffect } from "react";
import { List, useListContext } from "react-admin";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from '@mui/material';
import axios from 'axios';
import PatrolScheduleList from "./PatrolScheduleList"; // 确保导入路径正确
import { PatrolTeam, PatrolSchedule } from "@/types";

const PatrolScheduleTable = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [allTeams, setAllTeams] = useState<PatrolTeam[]>([]);
  const { refetch } = useListContext<PatrolSchedule>();

  useEffect(() => {
    // 获取所有的团队列表
    const fetchTeams = async () => {
      const response = await axios.get("/api/personnel/team/search");
      setAllTeams(response.data);
    };

    fetchTeams();
  }, []);

  const handleAddSchedule = async () => {
    try {
      const response = await axios.post("/api/vehicle/patrolschedule/add", {
        schedule_date: selectedDate,
        patrol_team_id: selectedTeam,
      });
      setDialogOpen(false);
      refetch();
    } catch (error) {
      console.error("Failed to add schedule:", error);
    }
  };

  const handleDeleteSchedule = async () => {
    try {
      await axios.delete("/api/vehicle/patrolschedule/delete", {
        data: { ids: [selectedDate] },
      });
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
      <Dialog
        open={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
      >
        <DialogTitle>删除排班</DialogTitle>
        <DialogContent>
          <p>你确定要删除选定日期的巡逻组吗？</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDialogOpen(false)} color="primary">
            取消
          </Button>
          <Button onClick={handleDeleteSchedule} color="primary">
            确定
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const PatrolScheduleTableWrapper = () => {
  const filter = {
    start: new Date().toISOString().split("T")[0],
    end: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0]
      ,
  };
  return (
    <List filter={filter} pagination={false}>
      <PatrolScheduleTable />
    </List>
  );
}

export default PatrolScheduleTableWrapper;
