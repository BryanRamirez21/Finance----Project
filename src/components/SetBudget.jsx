import React, { useContext, useRef, useState } from 'react'
import { MoneyOpsContext } from '../context/MoneyOpsConext';

export const SetBudget = () => {

    const {dispatchBudget} = useContext(MoneyOpsContext)

    const budgetInp = useRef(0)

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const month = monthNames[new Date().getMonth()];


    const onSubmit = (e) => {
        e.preventDefault();
        
        const action = {
            type: "SetBudget",
            payload: budgetInp.current.value
        }
        dispatchBudget(action);
    }

  return (
    <>
        <h5 className='mt-0 text-body-secondary '>Set budget for {month}</h5>
        <form onSubmit={onSubmit} className='d-flex flex-column justify-content-evenly h-100'>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Total earns - 100%</label>
                    <input
                        type="number"
                        id="description"
                        className="form-control"
                        ref={budgetInp}
                    />
                </div> 
                <button type="submit" className="btn btn-primary w-100">Confirm</button>
            </form>
    </>
  )
}
