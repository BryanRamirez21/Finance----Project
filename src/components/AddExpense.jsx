import React from 'react'

export const AddExpense = () => {

    const categories = ['Food', 'Utilities', 'Entertainment', 'Transportation', 'Other']


    return (
        <>
            <h4 className="mb-3">Add Expense</h4>
            <form>
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
