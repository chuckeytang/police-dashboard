import React, { useEffect } from "react";
import { useListContext, Loading } from "react-admin";
import { Calendar, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { PatrolSchedule } from "@/types";
import CalenderToolbar from "../common/CalenderToolbar";
import { localizer } from "../common/CalenderLocalizer";

export interface PatrolScheduleListProps {
  onRefetch: () => void;
  setSelectedDate: (date: Date) => void;
  setDialogOpen: (open: boolean) => void;
  setConfirmDialogOpen: (open: boolean) => void;
}

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
    end: new Date(
      new Date(schedule.schedule_date).getTime() + (24 * 60 * 60 - 1) * 1000
    ),
    allDay: false,
    desc: "巡逻组",
  }));

  return (
    <div className="flex">
      <div className="w-full p-2">
        {localizer ? (
          <Calendar
            localizer={localizer}
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
            components={{
              toolbar: CalenderToolbar,
            }}
            formats={{
              dayFormat: (date, culture, localizer) =>
                localizer ? localizer.format(date, "eeee", culture) : "", // 显示中文星期几
              weekdayFormat: (date, culture, localizer) =>
                localizer ? localizer.format(date, "eee", culture) : "", // 显示中文星期几
            }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PatrolScheduleList;
