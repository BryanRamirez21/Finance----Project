import React, { useContext, useEffect, useState } from 'react'
import { DollarSign, PlusCircle, List, PieChart, BarChart, Wallet } from 'lucide-react'
import { FocusContext } from '../context/FocusContext';
import { MoneyOpsContext } from '../context/MoneyOpsConext';

const btnProps = {
    PlusCircle: { icon: PlusCircle, text: "Add expense", color: 'rgb(246, 59, 91)' },
    DollarSign: { icon: DollarSign, text: "Set budget", color: 'rgb(34 197 94)' },
    PieChart: { icon: PieChart, text: "View categories", color: 'rgb(168 85 247)' },
    BarChart: { icon: BarChart, text: "Spending history", color: 'rgb(234 179 8)' },
    Budget: { icon: Wallet, text: "Set Incomings", color: 'rgb(59 130 246)' }
}

export const ButtonAction = ({type}) => {

    const btnType = btnProps[type] || {};
    const Icon = btnType.icon;

    if(!btnType) return (<></>);
    const {setisFocus, isFocus} = useContext(FocusContext);
    const {percents} = useContext(MoneyOpsContext);

    const functi = () => {
        if(type === "DollarSign"){
           
            const hasInvalidPercentages = Object.values(percents).some((value) => isNaN(value));
            if(hasInvalidPercentages)
                alert("cant be NaN")
            else
                setisFocus(!isFocus)

        }
    }


    return (
        <>
            <button onClick={functi} className="border-0 btn btn-dark w-100 d-flex flex-column align-items-center py-3" style={{backgroundColor:`${btnType.color}`}}>
                <Icon className="mb-2" style={{ width: '1.5rem', height: '1.5rem' }} />
                <span>{btnType.text}</span>
            </button>
        </>
    )
}
