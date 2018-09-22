import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import numeral from 'numeral';
/*  ================= WORKING OF DELETE BUTTON =============
-- the mapStateToProps is not always required so to remove a state, we will import our action function removeExpense and call dispatch(removeExpense(with the expense id))
-- $ This code exists in this component because the id is already passed through props and destructured here so we already have it here to be directly passed into the          function.
-- $ Remember the action functions take in objects {}.
*/
numeral.register('locale', 'in', {
  delimiters: {
    thousands: ' ',
    decimal: '.'
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal: function (number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: '₹'
  }
});

// switch between locales
numeral.locale('in');

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {numeral(amount / 100).format('$0,0.00')}
        -
        {moment(createdAt).format('MMMM Do, YYYY')}
      </p>
    </div>
  );
};

export default ExpenseListItem;
