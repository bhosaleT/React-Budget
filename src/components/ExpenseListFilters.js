import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";
import {
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";

/* ======================= WORKING OF DISPATCH WITH CONNECT FOR FILTERING WITH TEXT =====================
-- we use connect to connect the expeselistfilters component to the redux store.
-- for the input we add input of props.filters.text to make it show the search term , and onChange we want to change the text in and filter accordingly
-- the connect() function also gives us a dispatch method, this is the same dispatch method as that on the redux store.
-- so we use it using props.dispatch(in here we call the action function we already wrote i.e. setTextFilter(and to this we give the input of the text field))
-- Added a date Range picker from airbnb package, onDatesChange we call the function onDatesChange from there we dispatch both the dates using our pre-created actions and      send it directly to the store.
*/

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          startDateId={"start"}
          endDateId={"end"}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          isOutsideRange={() => false}
          numberOfMonths={1}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
