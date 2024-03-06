import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import styles from "./index.module.scss";
import moment from "moment";

const Calendar = () => {
  const [dateState, setDateState] = useState({
    startDate: moment(),
    endDate: moment(),
    focusedInput: null,
  });

  const { startDate, endDate, focusedInput } = dateState;
  // cette fonction permet de changer le state de startDate et endDate
  const handleDateChange = ({ startDate, endDate }) => {
    console.log(moment(startDate), "change");
    setDateState({
      startDate: moment(startDate),
      endDate: moment(endDate),
      focusedInput,
    });
  };

  // cette fonction permet de changer le state de focusedInput
  const handleFocusChange = (focusedInput) => {
    setDateState({ ...dateState, focusedInput });
  };

  return (
    <div className={styles.wrapper}>
      <DateRangePicker
        startDate={startDate}
        startDateId="your_unique_start_date_id"
        endDate={endDate}
        endDateId="your_unique_end_date_id"
        onDatesChange={handleDateChange}
        focusedInput={focusedInput}
        onFocusChange={handleFocusChange}
      />
    </div>
  );
};

export default Calendar;
