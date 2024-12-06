import React, { useContext, useEffect } from 'react'
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
        backgroundColor: '#1a90ff',
        ...theme.applyStyles('dark', {
            backgroundColor: '#308fe8',
        }),
    },
}));

export const CardBudget = ({card}) => {

    const {budget} = useContext(MoneyOpsContext);
    const {isFocus} = useContext(FocusContext);

    const budgetData = {
        needs: {
            name: "Needs",
            basePorc: "61%",
            total: budget.fifty.total,
            spent: 0,
            left:  budget.fifty.left,
        },
        wants: {
            name: "Wants",
            basePorc: "24%",
            total: budget.thirty.total,
            spent: 0,
            left:  budget.thirty.left,
        },
        savings: {
            name: "Savings",
            basePorc: "15%",
            total: budget.twenty.total,
            spent: 0,
            left: budget.twenty.left,
        }
    }[card]
    ||
    null;

    if(!budgetData){
        return (
            <div className='w-100 card shadow-sm justify-content-center p-4'>
                <h3 className='mb-4'>Error loading data</h3>
            </div>
        ) 
    }
    
    return (
        <div className='w-100 card shadow-sm justify-content-center p-4'>
            {
                !isFocus 
                ? 
                (<h3 className='mb-4'>{budgetData.name} ({budgetData.basePorc})</h3>)
                :
                (<input type='number' placeholder={budgetData.basePorc} className='mb-4 w-100 border-0 bg-dark-subtle bg-opacity-75 text-black px-3 py-2 rounded-1'/>)
            }
            <Stack spacing={2} sx={{ flexGrow:2}}>
                <BorderLinearProgress variant='determinate' classes={{colorPrimary:"red"}} value={(budgetData.left/budgetData.total) * 100} />
            </Stack>
            ${budgetData.left} / ${budgetData.total}<br />
        </div>
    )
}
