import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";
import { sortByDate, sortByAmount } from '../actions/filters'; 

/* ======================= WORKING OF DISPATCH WITH CONNECT FOR FILTERING WITH TEXT =====================
-- we use connect to connect the expeselistfilters component to the redux store.
-- for the input we add input of props.filters.text to make it show the search term , and onChange we want to change the text in and filter accordingly
-- the connect() function also gives us a dispatch method, this is the same dispatch method as that on the redux store.
-- so we use it using props.dispatch(in here we call the action function we already wrote i.e. setTextFilter(and to this we give the input of the text field))
*/

const ExpenseListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select value={props.filters.sortBy} onChange = {(e)=>{
        props.dispatch(e.target.value === 'date' ? sortByDate() : sortByAmount() )
    }}>
     <option value="date">Date</option>
     <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
