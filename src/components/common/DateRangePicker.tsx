import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = ({
  onDateChange,
}: {
  onDateChange: (startDate: Date | null, endDate: Date | null) => void;
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    onDateChange(date, endDate);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    onDateChange(startDate, date);
  };

  return (
    <div className="flex">
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate ? startDate : undefined}
        endDate={endDate ? endDate : undefined}
        placeholderText="开始日期"
        className="w-24 text-xs bg-transparent border-[#1e3a8a] border-2 focus:border-sky-300 focus:ring-sky-300 px-2 py-1 rounded"
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate ? startDate : undefined}
        endDate={endDate ? endDate : undefined}
        minDate={startDate ? startDate : undefined}
        placeholderText="结束日期"
        className="ml-2 w-24 text-xs bg-transparent border-[#1e3a8a] border-2 focus:border-sky-300 focus:ring-sky-300 px-2 py-1 rounded"
      />
    </div>
  );
};

export default DateRangePicker;
