import React, { useEffect, useReducer, useState } from 'react';
import { MoneyOpsContext } from './MoneyOpsConext';
import { MoneyReducer } from '../hooks/Reducer/MoneyReducer';
import { ExpenseReducer } from '../hooks/Reducer/ExpenseReducer';

export const MoneyOpsProvider = ({children}) => {

    const intialBudget = {
        budget: {
            total: 0,
            needs:   {name:"Needs", perct:50, total:0, spent:0, left:0},
            wants:   {name:"Wants", perct:30, total:0, spent:0, left:0},
            savings: {name:"Savings", perct:20, total:0, spent:0, left:0}
        },
        expensesHist: [
            {
                id: 0, 
                date:    "", 
                descrip: "", 
                amount: 0, 
                type: ""
            }
        ],
    };

    
    const [percetanges, setPercetanges] = useState({needs:0, wants:0, savings:0});

    const checkPerctg = (name, num) => {
        if(num > 100){
            alert("cant more tha 100 per cat");
            return;
        }
        const {needs, wants, savings} = percetanges;
        if(parseInt(needs) + parseInt(wants) + parseInt(savings) > 100){
            alert("cant more than 100 total");
            return;
        }
        setPercetanges({...percetanges, [name]: num});
    }
    
   

    const [budget, dispatchBudget] = useReducer(MoneyReducer, intialBudget);


    return (
        <MoneyOpsContext.Provider value={{budget, dispatchBudget, percetanges, setPercetanges, checkPerctg}}>
            {children}
        </MoneyOpsContext.Provider>
    )
}
