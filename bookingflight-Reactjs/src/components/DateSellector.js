import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
function DateSellector() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="DateSellector">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MM-dd-yyyy"
        minDate={new Date()}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  );
}
