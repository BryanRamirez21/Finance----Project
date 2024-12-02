import React, { useContext } from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Stack, styled } from '@mui/material';
import { MoneyContext } from '../context/MoneyConext';

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

    const {earns} = useContext(MoneyContext);

    const budgetData = {
        needs: {
            name: "Needs",
            total: earns.fifty,
            basePorc: "50%",
            spent: (earns.fifty)/4,
            left: 0,
        },
        wants: {
            name: "Wants",
            total: earns.thirty,
            basePorc: "30%",
            spent: earns.thirty,
            left: 0,
        },
        savings: {
            name: "Savings",
            total: earns.twenty,
            spent: earns.twenty,
            basePorc: "20%",
            left: 0,
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
            <Stack spacing={2} sx={{ flexGrow: 2 }}>
                <BorderLinearProgress variant="determinate" value={(budgetData.spent/budgetData.total) * 100} />
            </Stack>
            ${budgetData.spent} / ${budgetData.total}<br />
            {budgetData.total % budgetData.spent}
        </div>
    )
}
