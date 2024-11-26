import React from 'react'

export const AddExpense = ({title}) => {

    const categories = ['Food', 'Utilities', 'Entertainment', 'Transportation', 'Other']


    return (
        <>
            <h2 className='mb-4'>Add expense</h2>
            <form className='d-flex flex-column justify-content-evenly h-100 px-4'>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        id="description"
                        className="form-control"
                        placeholder="Description"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        className="form-control"
                        placeholder="Amount"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select id="category" className="form-select">
                        {categories.map((categorie, key) => (
                            <option key={key} value={categorie}>{categorie}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">Add Expense</button>
            </form>
        </>
    )
}
