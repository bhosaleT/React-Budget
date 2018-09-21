import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("Should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

//TEST SHOULD SET SORTBY TO AMOUNT
test("Should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SET_FILTER_SORTBYAMOUNT" });
  expect(state.sortBy).toBe("amount");
});

//TEST SHOULD SET SORTBY TO DATE
test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const action = { type: "SET_FILTER_SORTBYDATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

//SHOULD SET TEXT FILTER
test("Should set text filter", () => {
  const text = "This is my filter";
  const state = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text });
  expect(state.text).toBe(text);
});

//SHOULD SET STARTDATE FILTER
test("Should set startDate filter", () => {
  const startDate = moment(0);
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate
  });
  expect(state.startDate).toEqual(moment(0));
});

//SHOULD SET ENDDATE FILTER
test("Should set endDate filter", () => {
  const endDate = moment(0);
  const state = filtersReducer(undefined, { type: "SET_END_DATE", endDate });
  expect(state.endDate).toEqual(moment(0));
});
