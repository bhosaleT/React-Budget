import uuid from "uuid";
import database from "../firebase/firebase";

//ADD_EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database
      .ref("expenses")
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({ type: "REMOVE_EXPENSE", id });

// EDIT_EXPEPNSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// SET_EXPENSES
export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});


/* HOW FETCHING DATA FROM THE DATABASE WORKS FOR THE FIRST TIME 
-- we use functions which will contact firebase and then also push our actions.
-- we will return (dispatch) to get access to dispatch
-- then we reference to database using .ref() and then .once() which then gives us a snapshot which is our data.
-- then we loop through it using forEach and get inside that we get childsnapshot we add the childsnapshot to an array 
   which we will call expenses and then just the id comes form child snapshot and then we spread the childsnapshot.val().
-- Then we will dispatch(setExpenses).
*/


// export const startSetExpenses;
export const startSetExpenses = () => {
  return dispatch => {
   return database.ref('expenses').once('value').then((snapshot)=>{
     const expenses = [];
     snapshot.forEach((childsnapshot) => {
        expenses.push({
          id: childsnapshot.key,
          ...childsnapshot.val()
        });
     });
     dispatch(setExpenses(expenses));
    })
  };
};
