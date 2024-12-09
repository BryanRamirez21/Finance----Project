
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
            return initialState;

        case "SetPercentages":
            return {
                ...initialState, 
                budget: {
                    ...initialState.budget, 
                    [action.payload.name]: {
                        ...initialState.budget[action.payload.name],
                        perct: action.payload.num
                    },
                }
            };
    
        default:
            return initialState;
    }
}
