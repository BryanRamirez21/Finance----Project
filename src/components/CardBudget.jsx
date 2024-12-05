import React, { useContext, useEffect } from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Stack, styled } from '@mui/material';
import { MoneyOpsContext } from '../context/MoneyOpsConext';

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

    const {budget, expenseHist} = useContext(MoneyOpsContext);

    const budgetData = {
        needs: {
            name: "Needs",
            basePorc: "50%",
            total: budget.fifty.total,
            spent: 0,
            left:  budget.fifty.left,
        },
        wants: {
            name: "Wants",
            basePorc: "30%",
            total: budget.thirty.total,
            spent: 0,
            left:  budget.thirty.left,
        },
        savings: {
            name: "Savings",
            basePorc: "20%",
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
            <h3 className='mb-4'>{budgetData.name} ({budgetData.basePorc})</h3>
            <Stack spacing={2} sx={{ flexGrow:2}}>
                <BorderLinearProgress variant='determinate' classes={{colorPrimary:"red"}} value={(budgetData.left/budgetData.total) * 100} />
            </Stack>
            ${budgetData.left} / ${budgetData.total}<br />
        </div>
    )
}
