export default expenses => {
  let total = 0;
  if (expenses.length === 0) {
    return 0;
  } else {
    return expenses.map(expense => expense.amount).reduce((sum, value) => {
      return sum + value;
    }, 0);
  }
};
