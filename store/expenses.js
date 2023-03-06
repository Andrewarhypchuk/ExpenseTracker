import { createSlice } from "@reduxjs/toolkit";

const ExpensesSlice = createSlice({
    name: 'expensesSlice',
    initialState: {
        sortValue:'desc',
        expenses: [
            {
                id: 'e1',
                title: 'A pair of shoes',
                amount: 59.99,
                date: new Date('2021-12-19')
            },
            {
                id: 'e2',
                title: 'Alkohol',
                amount: 13.75,
                date: new Date('2020-07-19')
            },
            {
                id: 'e3',
                title: 'Bananas',
                amount: 9.99,
                date: new Date('2021-12-19')
            },
            {
                id: 'e4',
                title: 'Water',
                amount: 1.99,
                date: new Date('2021-08-19')
            },
            {
                id: 'e5',
                title: 'A pair of shoes',
                amount: 59.99,
                date: new Date('2021-12-19')
            },
            {
                id: 'e6',
                title: 'Alkohol',
                amount: 13.75,
                date: new Date('2020-07-19')
            },
            {
                id: 'e7',
                title: 'Bananas',
                amount: 9.99,
                date: new Date('2021-12-19')
            },
            {
                id: 'e8',
                title: 'A pair of shoes',
                amount: 59.99,
                date: new Date('2021-12-19')
            },
            {
                id: 'e9',
                title: 'Alkohol',
                amount: 13.75,
                date: new Date('2020-07-19')
            },
            {
                id: 'e10',
                title: 'Bananas',
                amount: 9.99,
                date: new Date('2021-12-19')
            },
            {
                id: 'e11',
                title: 'A pair of shoes',
                amount: 59.99,
                date: new Date('2021-12-19')
            },
            {
                id: 'e12',
                title: 'Alkohol',
                amount: 13.75,
                date: new Date('2020-07-19')
            },
            {
                id: 'e13',
                title: 'Bananas',
                amount: 9.99,
                date: new Date('2021-12-19')
            },

        ],
    },
    reducers: {
        setSortedDesc: (state) => {
            state.sortValue = 'desc'
            state.expenses.sort((a,b) => a.amount - b.amount).reverse();
        },
        setSortedAsc: (state) => {
            state.sortValue = 'asc'
            state.expenses.sort((a,b) => a.amount - b.amount);
        },

    }
})

export const selectDataExpenses = (state) => state.expenses.expenses;

const expencesReducer = ExpensesSlice.reducer

export const expencesActions = ExpensesSlice.actions;
export default expencesReducer;