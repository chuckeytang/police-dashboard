import React, { useEffect, useState } from "react";
import { useListContext, Loading } from "react-admin";
import { Calendar, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { PatrolSchedule } from "@/types";
import CalenderToolbar from "../common/CalenderToolbar";
import { localizer } from "../common/CalenderLocalizer";
import AlertDialog from "../common/AlertDialog";

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
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);

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
    allDay: false,
    desc: "巡逻组",
  }));

  const handleSelectSlot = (slot: any) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const selected = new Date(slot.start);

    if (selected < yesterday) {
      setAlertDialogOpen(true);
    } else {
      setSelectedDate(slot.start);
      setDialogOpen(true);
    }
  };

  const handleCloseAlertDialog = () => {
    setAlertDialogOpen(false);
  };

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
            onSelectSlot={handleSelectSlot}
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
            popup
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Alert Dialog */}
      <AlertDialog
        open={alertDialogOpen}
        onClose={handleCloseAlertDialog}
        title="提示"
        message="请选择今日及以后的日期创建排班。"
      />
    </div>
  );
};

export default PatrolScheduleList;
