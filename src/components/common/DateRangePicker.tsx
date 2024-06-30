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
    <div style={{ display: "flex", alignItems: "center" }}>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate ? startDate : undefined}
        endDate={endDate ? endDate : undefined}
        placeholderText="开始日期"
      />
      <span style={{ margin: "0 10px" }}>到</span>
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate ? startDate : undefined}
        endDate={endDate ? endDate : undefined}
        minDate={startDate ? startDate : undefined}
        placeholderText="结束日期"
      />
    </div>
  );
};

export default DateRangePicker;
