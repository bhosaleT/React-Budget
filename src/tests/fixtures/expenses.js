import moment from 'moment';

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

export default expenses;