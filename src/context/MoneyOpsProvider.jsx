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
            /*
            {
                id: 0, 
                date:    "", 
                descrip: "", 
                amount: 0, 
                type: ""
            }
            */
        ],
    };

    const [percents, setPercents] = useState({needs:0, wants:0, savings:0})
    const handleInputChange = ({target}) => {
        const {name, value} = target;
        const parsedValue = parseInt(value, 10);

        if(parseInt(value) > 99){
            alert("cant be more than 100 per cat");
            return;
        }
        
        const totalOtherCategories = Object.entries(percents)
            .filter(([key]) => key !== name)
            .reduce((sum, [, val]) => sum + parseInt(val, 10), 0);

        if(totalOtherCategories + parsedValue > 100){
            alert("cant be more than 100 total");
            return;
        }

        setPercents(prev => {
            const updatedPercents = { ...prev, [name]: parsedValue };    
            dispatchBudget({
                type: "SetPercentages",
                payload: updatedPercents
            });
    
            return updatedPercents;
        });
        
    }
    

    const [budget, dispatchBudget] = useReducer(MoneyReducer, intialBudget);


    return (
        <MoneyOpsContext.Provider value={{budget, dispatchBudget, handleInputChange, percents}}>
            {children}
        </MoneyOpsContext.Provider>
    )
}
