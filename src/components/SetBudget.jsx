import React, { useState } from 'react'

export const SetBudget = () => {

    const [earns, setEarns] = useState({
        total:0,
        fifty:0,
        thirty:0,
        twenty:0
    });

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
                <hr />
                <div className="mb-3 d-flex flex-row flex-wrap gap-4 justify-content-center">
                    <div className="d-flex flex-column flex-wrap">
                        <h4>100% budget: </h4>
                        <p>{earns.total}</p>
                    </div>
                    <div className="d-flex flex-column flex-wrap">
                        <h4>50% to needs: </h4>
                        <p>{earns.fifty}</p>
                    </div>
                    <div className="d-flex flex-column flex-wrap">
                        <h4>30% wishes / free: </h4>
                        <p>{earns.thirty}</p>
                    </div>
                    <div className="d-flex flex-column flex-wrap">
                        <h4>20% ahorro: </h4>
                        <p>{earns.twenty}</p>
                    </div>
                </div>  
                <button type="submit" className="btn btn-primary w-100">Confirm</button>
            </form>
    </>
  )
}
