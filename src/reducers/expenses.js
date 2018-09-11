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

export default expensesReducer;