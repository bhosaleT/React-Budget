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

export default getVisibleExpenses;