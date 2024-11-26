import React from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Stack, styled } from '@mui/material';

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

    const budgetData = {
        needs: {
            name: "Needs",
            total: 4200,
            basePorc: "50%",
            spent: 1200,
            left: 0,
        },
        wants: {
            name: "Wants",
            total: 2560,
            basePorc: "30%",
            spent: 1200,
            left: 0,
        },
        savings: {
            name: "Savings",
            total: 1680,
            spent: 1200,
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
                <BorderLinearProgress variant="determinate" value={50} />
            </Stack>
            ${budgetData.spent} / ${budgetData.total}
        </div>
    )
}
