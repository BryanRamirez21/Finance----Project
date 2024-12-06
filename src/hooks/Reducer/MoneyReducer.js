
export const MoneyReducer = (initialState, action) => {
    switch (action.type) {
        case "SetBudget":
            const num = action.payload;

            return{
                total: num,
                fifty:  {total: parseInt(num / 2), left: parseInt(num / 2)},
                thirty: {total: parseInt(num / 3.3331), left: parseInt(num / 3.3331)},
                twenty: {total: parseInt(num / 5), left: parseInt(num / 5)},

                //fifty:  {total: parseInt(num / 1.635), left: parseInt(num / 1.635)},
                //thirty: {total: parseInt(num / 4.162), left: parseInt(num / 4.162)},
                //twenty: {total: parseInt(num / 6.667), left: parseInt(num / 6.667)},
            };

        case "AddExpense":
            const {category, amount} = action.payload;
            
            if(category === "Needs"){
                return ({...initialState, fifty: {...initialState.fifty, left: initialState.fifty.left - amount}});
            }else if (category === "Wants")
                return ({...initialState, thirty: {...initialState.thirty, left: initialState.thirty.left - amount}});

    
        default:
            return initialState;
    }
}
