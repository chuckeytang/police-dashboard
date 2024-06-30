import React, { useEffect, useState } from "react";
import { useListContext, Loading } from "react-admin";
import { Calendar, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Schedule } from "@/types";
import CalenderToolbar from "../common/CalenderToolbar";
import { localizer } from "../common/CalenderLocalizer";
import AlertDialog from "../common/AlertDialog";

export interface ScheduleListProps {
  onRefetch: () => void;
  setSelectedDate: (date: Date) => void;
  setDialogOpen: (open: boolean) => void;
  setConfirmDialogOpen: (open: boolean) => void;
}

const ScheduleList: React.FC<ScheduleListProps> = ({
  onRefetch,
  setSelectedDate,
  setDialogOpen,
  setConfirmDialogOpen,
}) => {
  const { data, isLoading, error } = useListContext<Schedule>();
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);

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

  const handleSelectSlot = (slot: any) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const selected = new Date(slot.start);

    if (selected < yesterday) {
      setAlertDialogOpen(true);
    } else {
      const hasEvents = events.some(
        (event) =>
          event.start.toDateString() === selected.toDateString() &&
          event.end.toDateString() === selected.toDateString()
      );

      if (hasEvents) {
        // 如果该日期已有排班，执行与 onSelectEvent 相同的逻辑
        setSelectedDate(selected);
        setConfirmDialogOpen(true);
      } else {
        // 如果该日期没有排班，打开创建排班对话框
        setSelectedDate(selected);
        setDialogOpen(true);
      }
    }
  };

  const handleCloseAlertDialog = () => {
    setAlertDialogOpen(false);
  };

  return (
    <div className="flex">
      <div className="w-full p-2">
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
        />
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

export default ScheduleList;
