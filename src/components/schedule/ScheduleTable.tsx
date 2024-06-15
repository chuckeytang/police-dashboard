import React, { useState } from "react";
import { List, useListContext, Loading } from "react-admin";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { zhCN } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Button,
  List as MuiList,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

const locales = {
  "zh-CN": zhCN,
};

const localizer = dateFnsLocalizer({
  format: (date: any, formatStr: string, options: any) =>
    format(date, formatStr, { locale: zhCN }),
  parse: (dateStr: string, formatStr: string, options: any) =>
    parse(dateStr, formatStr, new Date(), { locale: zhCN }),
  startOfWeek: (date: any, options: any) => startOfWeek(date, { locale: zhCN }),
  getDay,
  locales,
});

interface Schedule {
  id: number;
  schedule_date: Date;
  day_team: {
    team_name: string;
  };
  night_team: {
    team_name: string;
  };
}

interface Team {
  id: number;
  team_name: string;
}

const CustomEvent = ({ event }: { event: any }) => (
  <div>
    <div>{event.title}</div>
    {event.desc && <span> - {event.desc}</span>}
  </div>
);

const ScheduleList = () => {
  const { data, isLoading, error } = useListContext<Schedule>();

  if (error) return <div color="error">加载数据时出错: {error.message}</div>;
  if (isLoading) return <Loading />;

  const events = data
    .map((schedule) => [
      {
        title: `早班: ${schedule.day_team.team_name}`,
        start: new Date(schedule.schedule_date),
        end: new Date(schedule.schedule_date),
        allDay: true,
        desc: "早班",
      },
      {
        title: `晚班: ${schedule.night_team.team_name}`,
        start: new Date(schedule.schedule_date),
        end: new Date(schedule.schedule_date),
        allDay: true,
        desc: "晚班",
      },
    ])
    .flat();

  return (
    <div className="flex">
      <div className="w-1/4 border-r border-gray-200 p-4">
        <div className="flex justify-between items-center mb-4">
          <div>班组目录</div>
          <Button variant="contained" color="primary" size="small">
            <a href="/team/add" className="text-white">
              +
            </a>
          </Button>
        </div>
        <MuiList>
          {data.map((schedule) => (
            <ListItem key={schedule.id}>
              <ListItemText primary={`早班: ${schedule.day_team.team_name}`} />
              <ListItemText
                primary={`晚班: ${schedule.night_team.team_name}`}
              />
            </ListItem>
          ))}
        </MuiList>
      </div>
      <div className="w-3/4 p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
          components={{
            event: CustomEvent,
          }}
        />
      </div>
    </div>
  );
};

const ScheduleTable = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const filter = {
    start: selectedDate ? selectedDate.toISOString().split("T")[0] : "",
    end: selectedDate
      ? new Date(selectedDate.getTime() + 30 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0]
      : "",
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="flex flex-col items-center">
        <DatePicker
          label="选择开始日期"
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          slotProps={{ textField: { variant: "outlined" } }} // 使用 slotProps 替代 renderInput
        />
        <List filter={filter}>
          <ScheduleList />
        </List>
      </div>
    </LocalizationProvider>
  );
};

export default ScheduleTable;
