import React, { useState } from "react";
import styles from "./index.module.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import {
  DateRangePicker,
  //   SingleDatePicker,
  //   DayPickerRangeController,
} from "react-dates";

const Calendar = () => {
  const [dateState, setDateState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: null,
  });

  const { startDate, endDate, focusedInput } = dateState;

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <DateRangePicker
        className={styles.datePicker}
        startDate={startDate}
        startDateId="your_unique_start_date_id"
        endDate={endDate}
        endDateId="your_unique_end_date_id"
        onDatesChange={({ startDate, endDate }) =>
          setDateState({ startDate, endDate, focusedInput })
        }
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) =>
          setDateState({ ...dateState, focusedInput })
        }
      />
    </div>
  );
};

export default Calendar;