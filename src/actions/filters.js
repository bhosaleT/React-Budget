//SET_FILTER_TEXT
export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

//SET_FILTER_SORTBYAMOUNT
export const sortBtyAmount = () => ({
    type: "SET_FILTER_SORTBYAMOUNT"
});

//SET_FILTER_SORTBYDATE
export const sortByDate = () => ({
    type: "SET_FILTER_SORTBYDATE"
});

//SET_START_DATE
export const setStartDate = startDate => ({
    type: "SET_START_DATE",
    startDate
});

//SET_END_DATE
export const setEndDate = endDate => ({
    type: "SET_END_DATE",
    endDate
});