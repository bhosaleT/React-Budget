import getVisibleExpenses from "../../selectors/expenses";
import moment from "moment";
import { filter } from "rsvp";

const expenses = [
  {
    id: "1",
    description: "gum",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "2",
    description: "water",
    note: "",
    amount: 125,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "rent",
    note: "",
    amount: 1950000,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

//SHOULD FILTER BY TEXT
test("should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

//SHOULD FILTER BY START DATE
test("should filter by start date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

// SHOULD FILTER BY END DATE
test("should filter by end date", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = getVisibleExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[1]]);
});

//SHOULD SORT BY DATE
test('should filter by date', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate:undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses,filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
})

//SHOULD SORT BY AMOUNT
test('Should filter by amount', ()=>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses,filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
})