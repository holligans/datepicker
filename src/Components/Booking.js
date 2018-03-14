import React, { Component } from "react";
import InfiniteCalendar, { Calendar, withRange } from "react-infinite-calendar";
import { format } from "date-fns";
import root from "window-or-global";
import "react-infinite-calendar/styles.css";
import "../static/style.css";
// format(date, 'ddd, MMM Do YYYY'))
class Booking extends Component {
  state = {
    calendar: false,
    firstDate: ""
  };

  toggle = () => {
    const { calendar } = this.state;
    console.log("hols");
    this.setState({
      calendar: !this.state.calendar
    });
  };
  calendarHandler = date => {
    if (date.eventType === 3) {
      console.log(date);
      this.setState(
        {
          startDate: format(date.start, " MMM Do YYYY"),
          lastDate: format(date.end, "MMM Do YYYY")
        },
        this.toggle()
      );
    }
  };
  render() {
    var today = new Date();
    var lastWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    const CalendarWithRange = withRange(Calendar);
    const { calendar, startDate, lastDate } = this.state;
    return (
      <div>
        <p>Hola mundo</p>
        <button onClick={() => this.toggle()}>
          {startDate ? `From:${startDate} to:${lastDate}` : "Pick a date"}
        </button>

        <InfiniteCalendar
          onSelect={date => this.calendarHandler(date)}
          Component={CalendarWithRange}
          className={calendar ? "show" : "hide"}
          height={500}
          width={300}
          minDate={today}
          selected={null}
        />
      </div>
    );
  }
}

export default Booking;
