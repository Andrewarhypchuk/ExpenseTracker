import { createSlice } from "@reduxjs/toolkit";

const ExpensesSlice = createSlice({
    name: 'expensesSlice',
    initialState: {
        sortValue:'desc',
        expenses: [
            {
                id: 'e1',
                title: 'A pair of shoes',
                amount: 45,
                category:'medium',
                date: new Date('2021-12-19')
            },
            {
                id: 'e2',
                title: 'Alkohol',
                amount: 13.75,
                category:'low',
                date: new Date('2020-07-19')
            },
            {
                id: 'e3',
                title: 'Bananas',
                amount: 9.99,
                category:'low',
                date: new Date('2021-12-19')
            },
            {
                id: 'e4',
                title: 'Water',
                amount: 1.99,
                category:'low',
                date: new Date('2021-08-19')
            },
            {
                id: 'e5',
                title: 'A pair of shoes',
                amount: 59.99,
                category:'medium',
                date: new Date('2021-12-19')
            },
            {
                id: 'e6',
                title: 'Alkohol',
                amount: 13.75,
                category:'low',
                date: new Date('2020-07-19')
            },
            {
                id: 'e7',
                title: 'Bananas',
                amount: 9.99,
                category:'low',
                date: new Date('2021-12-19')
            },
            {
                id: 'e8',
                title: 'A pair of shoes',
                amount: 89.99,
                category:'critical',
                date: new Date('2021-12-19')
            },
            {
                id: 'e9',
                title: 'Alkohol',
                amount: 13.75,
                category:'low',
                date: new Date('2020-07-19')
            },
            {
                id: 'e10',
                title: 'Bananas',
                amount: 9.99,
                category:'low',
                date: new Date('2021-12-19')
            },
            {
                id: 'e11',
                title: 'A pair of shoes',
                amount: 59.99,
                category:'medium',
                date: new Date('2021-12-19')
            },
            {
                id: 'e12',
                title: 'Alkohol',
                amount: 13.75,
                category:'low',
                date: new Date('2020-07-19')
            },
            {
                id: 'e13',
                title: 'Phone',
                amount: 93.20,
                category:'critical',
                date: new Date('2021-10-19')
            },
            {
                id: 'e14',
                title: 'Bananas',
                amount: 9.99,
                category:'low',
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
        addExpenseItem: (state,action) => {
            state.expenses.unshift(action.payload);
        }

    }
})



export const selectSortedValue = (state)=>{ 
    return state.expenses.sortValue 
}
export const selectFilteredExpenses = (state,category) => {
    if(category !== 'any'){
        return state.expenses.expenses.filter((expense) => expense.category === category)
    }
    return state.expenses.expenses

};

const expencesReducer = ExpensesSlice.reducer;

export const expencesActions = ExpensesSlice.actions;
export default expencesReducer;