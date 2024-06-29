import React from "react";
import { ToolbarProps } from "react-big-calendar";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

const CalenderToolbar = (toolbar: ToolbarProps) => {
  const goToBack = () => {
    toolbar.onNavigate("PREV");
  };

  const goToNext = () => {
    toolbar.onNavigate("NEXT");
  };

  const goToCurrent = () => {
    toolbar.onNavigate("TODAY");
  };

  const label = () => {
    const date = toolbar.date;
    return format(date, "yyyy年M月", { locale: zhCN });
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={goToBack}>
          上个月
        </button>
        <button type="button" onClick={goToCurrent}>
          今天
        </button>
        <button type="button" onClick={goToNext}>
          下个月
        </button>
      </span>
      <span className="rbc-toolbar-label">{label()}</span>
    </div>
  );
};

export default CalenderToolbar;
