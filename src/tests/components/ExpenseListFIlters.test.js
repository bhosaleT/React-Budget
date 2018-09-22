import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

//Should render ExpenseListFilters component properly
test("Should render expenselistfilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

//Should render ExpenseListFilters component properly with alternate filters
test("Should render expenselistfilters correctly", () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

//should handle text change.
test("Should handle text change", () => {
  const value = "rent";
  wrapper.find("input").simulate("change", {
    target: {
      value
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

//should handle sort by date.
test('Should handle sort by date', ()=> {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled();
});

// should handle sort by amount.
test('Should handle sort by amount', ()=>{
    const value = 'amount';
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled();
})

// should handle date changes.
// test('Should handle date changes', ()=>{
//     const startDate = moment(0).add(4, 'years');
//     const endDate = moment(0).add(8, 'years');
//     wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
//     expect(setStartDate).toHaveBeenLastCalledWith(startDate);
//     expect(setEndDate).toHaveBeenLastCalledWith(endDate);
// });

