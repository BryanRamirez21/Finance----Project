import React, { useContext } from 'react'
import { MoneyOpsContext } from '../context/MoneyOpsConext'

export const RecentExpensesCard = () => {

    const {expenseHist} = useContext(MoneyOpsContext);

    const NoRecentExpense = () => {
        return (
            <><h4 className='text-secondary'>No recent expense</h4></>
        );
    };

    const RecentExpenseList = () => {
        return(
            <>
                {expenseHist.slice().reverse().map(expense => (
                    <li key={expense.id} className='d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom'>
                        <div>
                            <p className='fw-bold mb-0'>{expense.descrip}</p>
                            <p className='text-sm text-black-50 mb-0'>{expense.type} - {expense.date}</p>
                        </div>
                        <span className='text-danger fw-bold'>-${expense.amount}</span>
                    </li>
                ))}
            </>
        );
    }

    return (
        <>
            <h2 className='mb-4'>Recent expenses</h2>
            <ul className='px-4'>
                {expenseHist.length > 0 ? (<RecentExpenseList />) : (<NoRecentExpense />)}
            </ul>
        </>
    )
}
