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
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";
import { Settings as SettingsIcon } from "@mui/icons-material";
import axios from "axios";
import ScheduleList from "./ScheduleList"; // 确保导入路径正确
import { PatrolTeam, Schedule } from "@/types";
import { MESSAGES } from "@/app/api/errorMessages";

interface TeamOrder {
  id: number;
  name: string;
  priority: number;
}

interface ScheduleSettings {
  overwrite: string;
  range: string;
  includeHolidays: string;
  startDate: string;
  endDate: string;
  dayOrder: TeamOrder[];
  nightOrder: TeamOrder[];
}

const ScheduleTable = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [smartScheduleOpen, setSmartScheduleOpen] = useState(false);
  const [dayTeam, setDayTeam] = useState<string>("");
  const [nightTeam, setNightTeam] = useState<string>("");
  const [allTeams, setAllTeams] = useState<PatrolTeam[]>([]);
  const { refetch } = useListContext<Schedule>();

  const [scheduleSettings, setScheduleSettings] = useState<ScheduleSettings>({
    overwrite: "overwrite", // 覆盖现有排班
    range: "custom", // 自定义范围
    includeHolidays: "exclude", // 不包含节假日
    startDate: new Date().toISOString().split("T")[0], // 默认开始日期
    endDate: new Date(new Date().setDate(new Date().getDate() + 10))
      .toISOString()
      .split("T")[0], // 默认结束日期
    dayOrder: [],
    nightOrder: [],
  });

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await axios.get("/api/personnel/team/search");
      setAllTeams(response.data);

      // 初始化 dayOrder 和 nightOrder 为班组的 ID
      const initialOrder = response.data.map(
        (team: { id: number; team_name: string }, index: number) => ({
          id: team.id,
          name: team.team_name,
          priority: index + 1,
        })
      );

      setScheduleSettings((prevSettings) => ({
        ...prevSettings,
        dayOrder: initialOrder,
        nightOrder: initialOrder.slice().reverse(), // 默认夜班顺序为倒序
      }));
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

        const response = await axios.post("/api/personnel/schedule/add", {
          schedule_date: localDate,
          day_team: dayTeam,
          night_team: nightTeam,
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

        await axios.delete("/api/personnel/schedule/delete", {
          data: {
            schedule_date: localDate,
          },
        });
      }
      setConfirmDialogOpen(false);
      refetch();
    } catch (error) {
      console.error("Failed to delete schedule:", error);
    }
  };

  const handleSaveSmartScheduleConfig = async () => {
    // 检查 dayOrder 和 nightOrder 是否有重复优先级
    const dayOrderSet = new Set(
      scheduleSettings.dayOrder.map((order) => order.priority)
    );
    const nightOrderSet = new Set(
      scheduleSettings.nightOrder.map((order) => order.priority)
    );
    if (
      dayOrderSet.size !== scheduleSettings.dayOrder.length ||
      nightOrderSet.size !== scheduleSettings.nightOrder.length
    ) {
      alert("Day order and night order must have unique priorities.");
      return;
    }

    try {
      const response = await axios.post(
        "/api/personnel/schedule/smartarrage",
        scheduleSettings
      );
      // 处理响应
      setSmartScheduleOpen(false);
      refetch();
    } catch (error) {
      console.error("Failed to save smart schedule config:", error);
    }
  };

  const handleChange = (name: keyof ScheduleSettings, value: any) => {
    setScheduleSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <IconButton onClick={() => setSmartScheduleOpen(true)} color="primary">
          <SettingsIcon />
          <div className="text-base">{MESSAGES.AUDO_SCHEDULE}</div>
        </IconButton>
      </div>
      <ScheduleList
        onRefetch={refetch}
        setSelectedDate={setSelectedDate}
        setDialogOpen={setDialogOpen}
        setConfirmDialogOpen={setConfirmDialogOpen}
      />
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>{MESSAGES.ADD_SCHEDULE}</DialogTitle>
        <DialogContent className="flex flex-col">
          <TextField
            select
            label={MESSAGES.SELECT_MORNING_TEAM}
            value={dayTeam}
            onChange={(e) => setDayTeam(e.target.value)}
            className="w-[200px]"
          >
            {allTeams.map((team) => (
              <MenuItem key={team.id} value={team.id}>
                {team.team_name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label={MESSAGES.SELECT_EVENING_TEAM}
            value={nightTeam}
            onChange={(e) => setNightTeam(e.target.value)}
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
            {MESSAGES.CANCEL}
          </Button>
          <Button onClick={handleAddSchedule} color="primary">
            {MESSAGES.CONFIRM}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
      >
        <DialogTitle>{MESSAGES.DELETE_SCHEDULE}</DialogTitle>
        <DialogContent>
          <p>{MESSAGES.CONFIRM_DELETE_SCHDULE}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDialogOpen(false)} color="primary">
            {MESSAGES.CANCEL}
          </Button>
          <Button onClick={handleDeleteSchedule} color="primary">
            {MESSAGES.CONFIRM}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={smartScheduleOpen}
        onClose={() => setSmartScheduleOpen(false)}
      >
        <DialogTitle>自动排班</DialogTitle>
        <DialogContent className="flex flex-col">
          <FormControl component="fieldset">
            <FormLabel component="legend">排班设置</FormLabel>
            <RadioGroup
              row
              value={scheduleSettings.overwrite}
              onChange={(e) => handleChange("overwrite", e.target.value)}
            >
              <FormControlLabel
                value="overwrite"
                control={<Radio />}
                label="覆盖现有排班"
              />
              <FormControlLabel
                value="fill"
                control={<Radio />}
                label="只填充空闲天数"
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className="mt-4">
            <FormLabel component="legend">排班范围</FormLabel>
            <RadioGroup
              row
              value={scheduleSettings.range}
              onChange={(e) => handleChange("range", e.target.value)}
            >
              <FormControlLabel
                value="month"
                control={<Radio />}
                label="当月"
              />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="自定义"
              />
            </RadioGroup>
            {scheduleSettings.range === "custom" && (
              <div className="flex space-x-4 mt-2">
                <TextField
                  type="date"
                  label="开始日期"
                  value={scheduleSettings.startDate}
                  onChange={(e) => handleChange("startDate", e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  type="date"
                  label="结束日期"
                  value={scheduleSettings.endDate}
                  onChange={(e) => handleChange("endDate", e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            )}
          </FormControl>
          <FormControl component="fieldset" className="mt-4">
            <FormLabel component="legend">排班时间</FormLabel>
            <RadioGroup
              row
              value={scheduleSettings.includeHolidays}
              onChange={(e) => handleChange("includeHolidays", e.target.value)}
            >
              <FormControlLabel
                value="include"
                control={<Radio />}
                label="包含节假日"
              />
              <FormControlLabel
                value="exclude"
                control={<Radio />}
                label="不包含节假日"
              />
            </RadioGroup>
          </FormControl>
          <div className="mt-4">
            <FormLabel component="legend">排班时间</FormLabel>
            <table className="w-full mt-2">
              <thead>
                <tr>
                  <th>班组</th>
                  <th>白班顺序</th>
                  <th>夜班顺序</th>
                </tr>
              </thead>
              <tbody>
                {allTeams.map((team, index) => (
                  <tr key={team.id}>
                    <td>{team.team_name}</td>
                    <td>
                      <TextField
                        type="number"
                        value={
                          scheduleSettings.dayOrder.find(
                            (order) => order.id === team.id
                          )?.priority || ""
                        }
                        onChange={(e) => {
                          const newDayOrder = scheduleSettings.dayOrder.map(
                            (order) =>
                              order.id === team.id
                                ? {
                                    ...order,
                                    priority: parseInt(e.target.value, 10),
                                  }
                                : order
                          );
                          handleChange("dayOrder", newDayOrder);
                        }}
                        inputProps={{ min: 1, max: allTeams.length }}
                      />
                    </td>
                    <td>
                      <TextField
                        type="number"
                        value={
                          scheduleSettings.nightOrder.find(
                            (order) => order.id === team.id
                          )?.priority || ""
                        }
                        onChange={(e) => {
                          const newNightOrder = scheduleSettings.nightOrder.map(
                            (order) =>
                              order.id === team.id
                                ? {
                                    ...order,
                                    priority: parseInt(e.target.value, 10),
                                  }
                                : order
                          );
                          handleChange("nightOrder", newNightOrder);
                        }}
                        inputProps={{ min: 1, max: allTeams.length }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSmartScheduleOpen(false)} color="primary">
            取消
          </Button>
          <Button onClick={handleSaveSmartScheduleConfig} color="primary">
            保存
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const ScheduleTableWrapper = () => {
  const filter = {
    start: new Date().toISOString().split("T")[0],
    end: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
  };
  return (
    <List filter={filter} pagination={false} empty={false} actions={false}>
      <ScheduleTable />
    </List>
  );
};

export default ScheduleTableWrapper;
