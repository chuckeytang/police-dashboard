import React, { useEffect } from "react";
import { useListContext, Loading } from "react-admin";
import { Calendar, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { momentLocalizer } from "react-big-calendar";
import { PatrolSchedule } from "@/types";

export interface PatrolScheduleListProps {
  onRefetch: () => void;
  setSelectedDate: (date: Date) => void;
  setDialogOpen: (open: boolean) => void;
  setConfirmDialogOpen: (open: boolean) => void;
}

const mLocalizer = momentLocalizer(moment);

const PatrolScheduleList: React.FC<PatrolScheduleListProps> = ({
  onRefetch,
  setSelectedDate,
  setDialogOpen,
  setConfirmDialogOpen,
}) => {
  const { data, isLoading, error } = useListContext<PatrolSchedule>();

  useEffect(() => {
    if (onRefetch) {
      onRefetch();
    }
  }, [data, onRefetch]);

  if (error) return <div color="error">加载数据时出错: {error.message}</div>;
  if (isLoading) return <Loading />;

  const events = data.map((schedule) => ({
    title: `巡逻组: ${schedule.patrol_team.team_name}`,
    start: new Date(schedule.schedule_date),
    end: new Date(schedule.schedule_date),
    allDay: true,
    desc: "巡逻组",
  }));

  return (
    <div className="flex">
      <div className="w-full p-2">
        <Calendar
          localizer={mLocalizer}
          events={events}
          views={[Views.WEEK]}
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

export default PatrolScheduleList;
