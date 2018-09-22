import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

/* =================== THE PROBLEM ENCOUNTERD ========================
++ The expense form component uses moment() to get the start date and end date and when we create a screenshot VS when we are checking against that screenshot
   some time has passed and therefore the snapshots dont match from pre created to the currently received data, to solve this we will have to make a mock moment() value.
++ STEPS TO SOLVE PROBLEM : jest provides us to use __mocks__ folder in which we will create a moment.js file in which we will just export a default function which returns     moment at timestamp and if no timestamp is present then it will return timestamp at 0. 
*/

test("should render the expense form correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

// Should render ExpenseForm with expense data
test("should render the expense form with expense data", () => {
  const wrapper = shallow(<ExpenseForm expenses={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

//Should render error for invalid form submission
/* IN this test we are simulating a submit form action and we will fake the prevent default by just passing an empty function */

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

//Should set description on input change
test("should set description on input change", () => {
  const value = "new description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("description")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

//Should set note on note change
test("Should set note text on note change", () => {
  const value = "new note";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value }
  });
  expect(wrapper.state("note")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

//Should set amount if valid amount provided.
test("should set amount if valid amount provided", () => {
  const value = "23.54";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("amount")).toBe(value);
});

//Should set amount if invalid amount is provided.
test("Should set amount if invalid amount is provided", () => {
  const value = "12.12121";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("amount")).toBe("");
});
