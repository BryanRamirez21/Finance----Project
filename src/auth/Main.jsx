import { useState } from 'react';
import { ButtonAction } from '../components/ButtonAction'
import { CardBudget } from '../components/CardBudget'
import { HalfSizeCard } from '../components/HalfSizeCard'
import { AddExpense } from '../components/AddExpense';
import { RecentExpensesCard } from '../components/RecentExpensesCard';

export const Main = () => {

    const [activeTab, setActiveTab] = useState('recentExpenses');
    const categories = ['Food', 'Utilities', 'Entertainment', 'Transportation', 'Other']


    return (
        <div className="container mx-auto" style={{maxWidth:"100rem"}}>
            <h1>30 20 10</h1>

            {/* Quick Actions */}
            <div className="mt-8 w-100 mb-5">
                <h2 className="h4 mb-3">Quick Actions</h2>
                <div className="w-100 d-flex flex-row col-7 gap-3">
                    <ButtonAction type={"Budget"} />    
                    <ButtonAction type={"PlusCircle"} />
                    <ButtonAction type={"DollarSign"} />
                    <ButtonAction type={"PieChart"} />
                    <ButtonAction type={"BarChart"} />
                </div>
            </div>

            <div className="row g-4">

                {/* Budget_info card */}
                <div className="mt-8 w-100 d-flex">
                    <div className="w-100 d-flex flex-row col-7 gap-5">
                        <CardBudget card={"needs"}/>
                        <CardBudget card={"wants"}/>
                        <CardBudget card={"savings"}/>
                    </div>
                </div>

                {/* Add_expense card */}
                <HalfSizeCard card={"SetBudget"}/>
                {/* Add_expense card */}
                <HalfSizeCard card={"DoughnutChart"}/>
                
                {/* recent_expenses card */}
                <div className='col-md-12'>
                    <div className='w-50'>
                        <div className="btn-group mb-2" role="group" aria-label="Tab Buttons">
                            <button
                                type="button"
                                className={`btn ${activeTab === 'recentExpenses' ? 'btn-dark' : 'btn-outline-dark'}`}
                                onClick={() => setActiveTab('recentExpenses')}
                            >
                                Recent Expenses
                            </button>
                            <button
                                type="button"
                                className={`btn ${activeTab === 'addTransaction' ? 'btn-dark' : 'btn-outline-dark'}`}
                                onClick={() => setActiveTab('addTransaction')}
                            >
                                Add Transaction
                            </button>
                        </div>
                    </div>

                    <div className="card p-4 shadow-sm">
                        {activeTab === "recentExpenses" 
                        ? (<RecentExpensesCard />)
                        : ( <AddExpense />) 
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}