import { useContext, useState } from 'react';
import { ButtonAction } from '../components/ButtonAction'
import { CardBudget } from '../components/CardBudget'
import { HalfSizeCard } from '../components/HalfSizeCard'
import { AddExpense } from '../components/AddExpense';
import { RecentExpensesCard } from '../components/RecentExpensesCard';
import { MoneyOpsProvider } from '../context/MoneyOpsProvider';
import { FocusProvider } from '../context/FocusProvider';

export const Main = () => {

    const [activeTab, setActiveTab] = useState('recentExpenses');
    
    return (
        <MoneyOpsProvider>
            <FocusProvider>
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
                            <div className="d-flex mb-2">
                                <div className='p-1' style={{ backgroundColor:'rgb(230 230 230)', borderRadius: '8px' }}>
                                    <button
                                        className={`border-0 px-3 py-1 ${activeTab === 'recentExpenses' ? 'bg-white' : 'bg-transparent'}`}
                                        onClick={() => setActiveTab('recentExpenses')}
                                        style={{
                                        borderRadius: '8px',
                                        transition: 'background-color 0.3s ease',
                                        fontWeight: activeTab === 'recentExpenses' ? '600' : '400',
                                        color: activeTab === 'recentExpenses' ? '#000' : '#666'
                                        }}
                                    >
                                        Recent Expenses
                                    </button>
                                    <button
                                        className={`border-0 px-3 py-1 ${activeTab === 'addTransaction' ? 'bg-white' : 'bg-transparent'}`}
                                        onClick={() => setActiveTab('addTransaction')}
                                        style={{
                                        borderRadius: '8px',
                                        transition: 'background-color 0.3s ease',
                                        fontWeight: activeTab === 'addTransaction' ? '600' : '400',
                                        color: activeTab === 'addTransaction' ? '#000' : '#666'
                                        }}
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
            </FocusProvider>
        </MoneyOpsProvider>
    )
}