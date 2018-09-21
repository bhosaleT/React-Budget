import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

export const ExpenseList = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No Expenses Found</p>
    ) : (
      <ul>
        {props.expenses.map(expense => {
          return (
            <li key={expense.id}>
              <ExpenseListItem {...expense} />{" "}
              {/* to destructuring expenses at the ExpenseListItem we will add spreading to the props passing */}
            </li>
          );
        })}
      </ul>
    )}
  </div>
);

/* 
    ==================================== WORKING OF CONNECT =========================== 
- The connect is a named export from the package react-redux which lets us connect our react components to the redux store
- we use connect()(ExpanseList) and send back ExpanseList in it because it is a hoc which takes in a component and sends back
  a modified componet with some additions.
- we make another function which is called mapStateToProps this function takes the state from the store which is passed down from the App.js file and
  maps it to the props of the ExpanseList component.
- this can be used in props.expenses.length.
- Now our component can access all the information it requires form the store.
- As the store changes the component will change automatically.
- ********* ADDING FILTERING *********** we change the expenses props to take in getVisibleExpenses() function which takes in expenses and filters and sends back a filtered   list.
*/

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
