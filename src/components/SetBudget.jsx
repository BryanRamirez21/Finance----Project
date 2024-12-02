import React, { useContext, useState } from 'react'
import { MoneyContext } from '../context/MoneyConext';

export const SetBudget = () => {

    const {earns, setEarns} = useContext(MoneyContext);

    const calculateExpense = (num) => {
        let total, fifty, thirty, twenty = 0;
        
        total = num;
        fifty = parseInt(num / 2);
        thirty = parseInt(num / 3.3331);
        twenty = parseInt(num / 5);

        setEarns({
            total,
            fifty,
            thirty,
            twenty,
        })
    }

  return (
    <>
        <form className='d-flex flex-column justify-content-evenly h-100'>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Total earns - 100%</label>
                    <input
                        type="number"
                        id="description"
                        className="form-control"
                        onChange={(e) => calculateExpense(e.target.value)}
                    />
                </div> 
                <button type="submit" className="btn btn-primary w-100">Confirm</button>
            </form>
    </>
  )
}
