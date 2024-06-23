import React, { useEffect } from "react";
import { useListContext, Loading } from "react-admin";
import { Calendar, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { momentLocalizer } from "react-big-calendar";
import { Schedule } from "@/types";

export interface ScheduleListProps {
  onRefetch: () => void;
  setSelectedDate: (date: Date) => void;
  setDialogOpen: (open: boolean) => void;
  setConfirmDialogOpen: (open: boolean) => void;
}

const mLocalizer = momentLocalizer(moment);

const ScheduleList: React.FC<ScheduleListProps> = ({
  onRefetch,
  setSelectedDate,
  setDialogOpen,
  setConfirmDialogOpen,
}) => {
  const { data, isLoading, error } = useListContext<Schedule>();

  useEffect(() => {
    if (onRefetch) {
      onRefetch();
    }
  }, [data, onRefetch]);

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
      <div className="w-full p-2">
        <Calendar
          localizer={mLocalizer}
          events={events}
          views={[Views.MONTH]}
          style={{ height: 700 }}
          step={60}
          selectable
          onSelectSlot={({ start }) => {
            setSelectedDate(start);
            setDialogOpen(true);
          }}
          onSelectEvent={(event) => {
            setSelectedDate(event.start);
            setConfirmDialogOpen(true);
          }}
        />
      </div>
    </div>
  );
};

export default ScheduleList;
