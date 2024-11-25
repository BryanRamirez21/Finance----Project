import { AddExpense } from '../components/AddExpense'
import { DoughnutChart } from '../components/DoughnutChart';
import { SetBudget } from '../components/SetBudget';

export const usePages = (card) => {

    const pageDetails = {
        SetBudget: {
            title: "Set Incomings",
            page: SetBudget
        },
        AddExpense: {
            title: "Add Expense",
            page: AddExpense
        },
        DoughnutChart: {
            title: "Monthly Budget",
            page: DoughnutChart
        },
    }[card]
    ||
    null;

    return {
        pageDetails,
    }
}
