import { createStore, combineReducers } from "redux";

//============================== EXPENSES REDUCER =================================//

const expensesReducerDefaultState = [];

//This reducer deals with the expenses section of the state the switch cases in this reducer will contain actions to manipulate the expenses state.
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* The default state of filters will have almost undefined and default options selected for all values */
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

//This reducers deals with the Filters section of the state the switch cases in this reducer will contain actions to manipulate the  filters.
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//STORE CREATION

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

// this demostate basically writes down what states we want to have in our app
/* THE STATE
---  EXPENSES  ---
1. id - random number to denote the id of expense
2. description - a short description of the expense
3. note - a optional note for the expense
4. amount - the actual amount of the expense in pennies
5. createdAt - the time at which the expense was created.
---  FILTERS  ---
1. text - Filter by text
2. sortBy - sortBy using the date or amount
3. startDate , endDate - filter using the start and end dates.
*/

const demoState = {
  expenses: [
    {
      id: "xsxsxsxs",
      description: "",
      note: "This was a new file",
      amount: 12121,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
