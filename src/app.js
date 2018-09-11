import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water Bill", amount: 200, createdAt: 1})
);

store.dispatch(
  addExpense({ description: "Gas Bill", amount: 100, createdAt: 2 })
);

store.dispatch(
  addExpense({ description: "Electricity Bill", amount: 500, createdAt: 3 })
);

store.dispatch(
  addExpense({ description: "House Rent", amount: 1500, createdAt: 4 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

/* ================= WORKING OF PROVIDER ==================== 
- The Provider named function export from react-redux is a simple import and its basic functionality is to provide the redux store to all the components
- it takes in one prop store = {store} in it we pass in our store and that is also an hoc so we call our main app from inside this . and the store is available to all
  the components.
*/

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
