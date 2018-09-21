import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../../actions/filters";
import moment from "moment";

// TEST CASE FOR SETTEXTFILTER

test("should set the action for setting the text filter", ()=> {
    const action = setTextFilter("demo");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text:"demo"
    });
});

//TEST CASE FOR SETTEXTFILTER TO EMPTY

test("should set the action for setting the text filter", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});


// TEST CASE FOR SETSTARTDATE
test("Should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

//TEST CASE FOR SETENDDATE
test("Should generate set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
});

//TEST CASE FOR SORTBYAMOUNT
test("Should generate sort by amount action object", ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SET_FILTER_SORTBYAMOUNT"
    });
});

//TEST CASE FOR SORTBYDATE
test("Should generate sort by amount action object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SET_FILTER_SORTBYDATE"
    });
});