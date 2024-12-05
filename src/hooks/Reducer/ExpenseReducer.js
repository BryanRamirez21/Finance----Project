
export const ExpenseReducer = (initialState, action) => {

    switch(action.type){
        case "AddExpense":
            const {desc, amount, category} = action.payload; 

            return [...initialState,{
                id:      new Date().getTime() * 3,
                date:    new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(),
                descrip: desc,
                amount:  parseInt(amount),
                type:    category
            }];
    }
}
