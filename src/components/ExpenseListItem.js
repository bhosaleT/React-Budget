import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";

/*  ================= WORKING OF DELETE BUTTON =============
-- the mapStateToProps is not always required so to remove a state, we will import our action function removeExpense and call dispatch(removeExpense(with the expense id))
-- $ This code exists in this component because the id is already passed through props and destructured here so we already have it here to be directly passed into the          function.
-- $ Remember the action functions take in objects {}.
*/

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>Amount: {amount}</p>
      <p>Time: {createdAt}</p>
      <button
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default connect()(ExpenseListItem);
