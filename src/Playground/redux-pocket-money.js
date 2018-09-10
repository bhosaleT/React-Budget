import { createStore, combineReducers } from "redux";
import uuid from "uuid";
//============================== ACTION GENERATORS =================================//

//ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "", //Destructuring the input from the user in individual fields.
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({ type: "REMOVE_EXPENSE", id });

// EDIT_EXPEPNSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

//SET_FILTER_TEXT
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//SET_FILTER_SORTBYAMOUNT
const sortBtyAmount = () => ({
  type: "SET_FILTER_SORTBYAMOUNT"
});

//SET_FILTER_SORTBYDATE
const sortByDate = () => ({
  type: "SET_FILTER_SORTBYDATE"
});

//SET_START_DATE
const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

//SET_END_DATE
const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});
//============================== EXPENSES REDUCER =================================//

const expensesReducerDefaultState = [];

//This reducer deals with the expenses section of the state the switch cases in this reducer will contain actions to manipulate the expenses state.
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(expense => {
        return action.id !== expense.id;
      });
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

/* The default state of filters will have almost undefined and default options selected for all values */
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

// ============================= FILTERS REDUCER ===============================//

//This reducers deals with the Filters section of the state the switch cases in this reducer will contain actions to manipulate the  filters.
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SET_FILTER_SORTBYAMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SET_FILTER_SORTBYDATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

//============================= GET VISIBLE EXPENSES ==========================//

/* 
--- WORKING OF FILTERING ---
1.  the function named getVisibleExpenses takes in two things the state.expenses and state.filters
2.  destruct the filter state into individiual variables.
3.  three variables are created to check the startDate, EndDate, text
4.  to check the startDate whether its number or not and then if expense.createdAt is less than or equal to the startDate
5.  to check if the endDate is greater than createdAt
6.  to match the text we use .includes(with the text filter provided) && convert all text to lowercase to make the filtering free or uppercase or lowercase
7.  FILTER all the values where all three are true.
8.  SortBy {using .sort() func} if the sort is based on time then check which ones createdAt timestamp value is lower that one should come first, if its sorted by amount        the larger amount one should come first.
*/

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const desc = expense.description.toLowerCase();
      const textMatch = desc.includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount > b.amount ? -1 : 1;
      }
    });
};

//STORE CREATION

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "office rent", amount: 100, createdAt: 100000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 400, createdAt: 10 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("rent"));

store.dispatch(sortBtyAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(10000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(300));
// store.dispatch(setEndDate());

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
