import moment from 'moment';
/* The default state of filters will have almost undefined and default options selected for all values */
const filtersReducerDefaultState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
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

export default filtersReducer;