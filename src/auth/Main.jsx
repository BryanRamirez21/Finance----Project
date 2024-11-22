import React from 'react'
import { DollarSign, PlusCircle, List, PieChart as PieChartIcon, BarChart as BarChartIcon } from 'lucide-react'
import { ButtonAction } from '../components/ButtonAction'
import { HalfSizeCard } from '../components/HalfSizeCard'

export const Main = () => {

    return (
        <div className="mx-auto" style={{maxWidth:"100rem"}}>
            <h1>30 20 10</h1>
            {/* Quick Actions */}
            <div className="mt-8 w-100 mb-5">
                <h2 className="h4 mb-3">Quick Actions</h2>
                <div className="w-100 d-flex flex-row col-7 gap-3">
                    <ButtonAction type={"PlusCircle"} />
                    <ButtonAction type={"DollarSign"} />
                    <ButtonAction type={"PieChart"} />
                    <ButtonAction type={"BarChart"} />
                </div>
            </div>


            <div className="row gap-5">

                {/* Add expense card */}
                <HalfSizeCard func={"AddExpense"}/>

                <HalfSizeCard func={"DoughnutChart"}/>

                

                <div className='col-md-12'>
                    <div className="card p-4 shadow-sm">
                        <h2 className='mb-4'>Recent expenses</h2>
                        <ul>
                            <li className='d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom'>
                                <div>
                                    <p className='fw-bold mb-0'>Netflix</p>
                                    <p className='text-sm text-black-50 mb-0'>Entretainment - 2024-11-10</p>
                                </div>
                                <span className='text-danger fw-bold'>-$500</span>
                            </li>
                            <li className='d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom'>
                                <div>
                                    <p className='fw-bold mb-0'>Netflix</p>
                                    <p className='text-sm text-black-50 mb-0'>Entretainment - 2024-11-10</p>
                                </div>
                                <span className='text-danger fw-bold'>-$500</span>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>

            

        </div>
    )
}