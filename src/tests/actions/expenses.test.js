import {
  addExpense,
  EditExpense,
  removeExpense,
  editExpense
} from "../../actions/expenses";

/* 
----------THE BASIC STEPS TO FOLLOW FOR WRITING TESTS-------------
-- Setup test case using test().
-- Call the function with all the input parameters.
-- Make an assertion using expect().
*/

// REMOVE EXPENSE ACTION
test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

// EDIT EXPENSE ACTION
test("Should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "new note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "new note value"
    }
  });
});

// ADD EXPENSE ACTION
test("Should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last months rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

// ADD EXPENSE ACTION WITH DEFAULT DATA.
test("should setup add expense action with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
