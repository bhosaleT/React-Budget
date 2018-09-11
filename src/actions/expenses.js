import uuid from 'uuid';
//ADD_EXPENSE
export const addExpense = ({
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
export const removeExpense = ({ id } = {}) => ({ type: "REMOVE_EXPENSE", id });

// EDIT_EXPEPNSE
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});