import React, { useContext, useEffect, useState } from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Stack, styled } from '@mui/material';
import { MoneyOpsContext } from '../context/MoneyOpsConext';
import { FocusContext } from '../context/FocusContext';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
        }),
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#34AD40',
        ...theme.applyStyles('dark', {
            backgroundColor: '#308fe8',
        }),
    },
}));

export const CardBudget = ({card}) => {

    const {budget, dispatchBudget, percents, handleInputChange} = useContext(MoneyOpsContext);
    const {isFocus} = useContext(FocusContext);

    const {name, perct, total, spent, left} = budget.budget[card] || {};

    if(!budget){
        return (
            <div className='w-100 card shadow-sm justify-content-center p-4'>
                <h3 className='mb-4'>Error loading data</h3>
            </div>
        ) 
    };

    
    return (
        <div className='w-100 card shadow-sm justify-content-center p-4'>
            {
                !isFocus 
                ? 
                (<h3 className='mb-4'>{name} ({perct}%)</h3>)
                :
                (<input 
                    type='number'
                    name={card} 
                    value={percents[card]}
                    onChange={handleInputChange}
                    max={100} 
                    min={1}
                    placeholder={(isNaN(perct) ? (0) : perct)+" %"} 
                    className='mb-4 w-100 border-0 bg-dark-subtle bg-opacity-75 text-black px-3 py-2 rounded-1'
                />)
            }
            <Stack spacing={2} sx={{ flexGrow:2}}>
                <BorderLinearProgress variant='determinate' classes={{colorPrimary:"red"}} value={(left/total) * 100} />
            </Stack>
            ${isNaN(left) ? (0) : left} / ${isNaN(total) ? (0) : total}<br />
        </div>
    )
}
