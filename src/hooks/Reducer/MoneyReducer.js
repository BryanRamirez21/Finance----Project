
export const MoneyReducer = (initialState, action) => {
    switch (action.type) {
        case "SetBudget":
            const num = action.payload; 

            return {
                ...initialState, 
                budget: {
                    ...initialState.budget, 
                    total: num,
                    needs: {
                        ...initialState.budget.needs,
                        total: num*(initialState.budget.needs.perct / 100),
                        left: num*(initialState.budget.needs.perct / 100)
                    },
                    wants: {
                        ...initialState.budget.wants,
                        total: num*(initialState.budget.wants.perct / 100),
                        left: num*(initialState.budget.wants.perct / 100)
                    },
                    savings: {
                        ...initialState.budget.savings,
                        total: num*(initialState.budget.savings.perct / 100),
                        left: num*(initialState.budget.savings.perct / 100)
                    }
                }
            };

        case "AddExpense":
            const {desc, amount, category} = action.payload; 
            return {
                ...initialState,
                budget: {
                    ...initialState.budget,
                    [(category).toLowerCase()]: {
                        ...initialState.budget[(category).toLowerCase()],
                        left: initialState.budget[(category).toLowerCase()].total - amount
                    }
                },
                expensesHist: [...initialState.expensesHist,
                    {
                        id:      new Date().getTime() * 3,
                        date:    new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(),
                        descrip: desc,
                        amount:  parseInt(amount),
                        type:    category
                    }
                ]
            };

        case "SetPercentages":
            const updatedPercentages = action.payload;
            return {
                ...initialState, 
                budget: {
                    ...initialState.budget, 
                    ...Object.keys(updatedPercentages).reduce((acc, key) => {
                        const newPerct = updatedPercentages[key];
                        const totalForCategory = (initialState.budget.total * newPerct) / 100;

                        acc[key] = {
                            ...initialState.budget[key],
                            perct: newPerct,
                            total: totalForCategory,
                            left: totalForCategory - initialState.budget[key].spent
                        };
        
                        return acc;
                    }, {})
                }
            };
    
        default:
            return initialState;
    }
}
