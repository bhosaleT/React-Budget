import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpense";
import expenses from "../fixtures/expenses";

let addExpenseSpy, history, wrapper;

beforeEach(() => {
  addExpenseSpy = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage addExpense={addExpenseSpy} history={history} />
  );
});

//Should render the add expense page correctly.
test("should render add expense page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

//Should handle on submit
test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
});
