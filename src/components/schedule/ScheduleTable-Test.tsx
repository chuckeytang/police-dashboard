import React, { useState } from 'react';
import { Calendar, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment'
import {
  momentLocalizer,
} from 'react-big-calendar'
const mLocalizer = momentLocalizer(moment)

const mockEvents = [
  {
    title: '早班: 勤务一组',
    start: new Date(2024, 5, 24),
    end: new Date(2024, 5, 24),
    allDay: true,
    desc: '早班',
  },
  {
    title: '晚班: 勤务二组',
    start: new Date(2024, 5, 24),
    end: new Date(2024, 5, 24),
    allDay: true,
    desc: '晚班',
  },
  {
    title: '早班: 勤务三组',
    start: new Date(2024, 5, 25),
    end: new Date(2024, 5, 25),
    allDay: true,
    desc: '早班',
  },
  {
    title: '晚班: 勤务四组',
    start: new Date(2024, 5, 25),
    end: new Date(2024, 5, 25),
    allDay: true,
    desc: '晚班',
  },
];

const ScheduleList = () => {
  const events = mockEvents;
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(Views.MONTH);

  const handleNavigate = (newDate: React.SetStateAction<Date>, action: any) => {
    console.log('Navigating to:', newDate, action);
    setDate(newDate);
    setView(view);
  };

  return (
    <div className="flex">
      <div className="w-full p-2">
        <Calendar
          localizer={mLocalizer}
          events={events}
          views={[Views.MONTH]}
          style={{ height: 700 }}
          step={60}
          // components={{
          //   toolbar: CustomToolbar, // 使用自定义 Toolbar
          // }}
        />
      </div>
    </div>
  );
};

export default ScheduleList;
