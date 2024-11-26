import React from 'react'

export const RecentExpensesCard = () => {
    return (
        <>
            <h2 className='mb-4'>Recent expenses</h2>
            <ul className='px-4'>
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
        </>
    )
}
