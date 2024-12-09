import React, { useContext, useRef, useState } from 'react'
import { MoneyOpsContext } from '../context/MoneyOpsConext';

export const AddExpense = ({title}) => {

    const {dispatchBudget} = useContext(MoneyOpsContext);

    const categories = ['Needs', 'Wants']
    const descInput = useRef("");
    const amountInput = useRef(0);
    const categoryInput = useRef("");

    const onSubmit = (e) => {
        e.preventDefault();

        const expense = {
            desc: descInput.current.value,
            amount: amountInput.current.value,
            category: categoryInput.current.value
        };

        const action = {
            type: "AddExpense",
            payload: expense
        };

        dispatchBudget(action);
    }

    return (
        <>
            <h2 className='mb-4'>Add expense</h2>
            <form onSubmit={onSubmit} className='d-flex flex-column justify-content-evenly h-100 px-4'>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        id="description"
                        className="form-control"
                        placeholder="Description"
                        ref={descInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input
                        type="number"
                        step="0.01"
                        id="amount"
                        className="form-control"
                        placeholder="Amount"
                        ref={amountInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select id="category" className="form-select" ref={categoryInput}>
                        {categories.map((categorie, key) => (
                            <option key={key} value={categorie}>{categorie}</option>
                        ))}
                    </select>
                </div>
                <div className='w-25'>
                    <button type="submit" className="btn btn-primary w-100">Add Expense</button>
                </div>
            </form>
        </>
    )
}
