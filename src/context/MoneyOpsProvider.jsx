import React, { useReducer, useState } from 'react';
import { MoneyOpsContext } from './MoneyOpsConext';
import { MoneyReducer } from '../hooks/Reducer/MoneyReducer';
import { ExpenseReducer } from '../hooks/Reducer/ExpenseReducer';

export const MoneyOpsProvider = ({children}) => {

    const intialBudget = {
        total:0,
        fifty: {total:0, left:0},
        thirty:{total:0, left:0},
        twenty:{total:0, left:0}
    }

    const initialExpenseHist = [];
    const initialSpent = 0

    const [budget, dispatchBudget] = useReducer(MoneyReducer, intialBudget);
    const [expenseHist, dispatchExpense] = useReducer(ExpenseReducer, initialExpenseHist);
    const [totalSpent, dispatchExpense2] = useReducer(ExpenseReducer, initialSpent);


    return (
        <MoneyOpsContext.Provider value={{budget, dispatchBudget, expenseHist, dispatchExpense, totalSpent, dispatchExpense2}}>
            {children}
        </MoneyOpsContext.Provider>
    )
}
