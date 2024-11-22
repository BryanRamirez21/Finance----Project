import React from 'react'
import { AddExpense } from './AddExpense'
import { DoughnutChart } from './DoughnutChart';

export const HalfSizeCard = ({func}) => {

    const type = {
        AddExpense,
        DoughnutChart
    };
    const TypeFunc = type[func];
    
    return (
        <div className="col-md">
            <div className="card p-4 shadow-sm">
                <TypeFunc />
            </div>
        </div>
    )
}
