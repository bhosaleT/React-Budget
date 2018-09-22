import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

//TEST DEFAULT STATE VALUE
test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

//TEST REMOVING EXPENSE BY ID.
test("Should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

//TEST REMOVING EXPESNE WITH WRONG ID.
test("Should not remove expense by id if not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

//TEST ADDING AN EXPENSE.
test("Should add an expense" , ()=>{
   const expense = {
       id: 'abc1234',
       description: 'Laptop',
       note: '',
       createdAt: moment(0).add(1,'days').valueOf(),
       amount: 29500
   };
   const action = {
       type: 'ADD_EXPENSE',
       expense
   };
   const state = expensesReducer(expenses,action);
   expect(state).toEqual([...expenses, expense]);
});

//TEST EDIT AN EXPENSE
test('Should edit an expense', ()=>{
   const amount = 122000;
   const action = {
       type: 'EDIT_EXPENSE',
       id: expenses[1].id,
       updates:{
           amount
       }
   };
   const state = expensesReducer(expenses,action);
   expect(state[1].amount).toBe(amount);
});

//TEST EXPENSE SHOULD NOT BE EDITED IF NOT FOUND.
test('Should not edit an expense if not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});