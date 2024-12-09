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

    const {budget, dispatchBudget, percetanges, setPercetanges, checkPerctg} = useContext(MoneyOpsContext);
    const {isFocus} = useContext(FocusContext);

    const {name, perct, total, spent, left} = budget.budget[card] || null;

    if(!budget){
        return (
            <div className='w-100 card shadow-sm justify-content-center p-4'>
                <h3 className='mb-4'>Error loading data</h3>
            </div>
        ) 
    }

    const setPerct = (e) => {
        const num = e.target.value;
        const name = e.target.name;

        const action = {
            type: "SetPercentages",
            payload: {num, name}
        };
        //dispatchBudget(action);

        checkPerctg(name, num);
    }
    
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
                    onChange={(e) => setPerct(e)} 
                    max={100} 
                    value={percetanges[card]}
                    placeholder={perct+" %"} 
                    className='mb-4 w-100 border-0 bg-dark-subtle bg-opacity-75 text-black px-3 py-2 rounded-1'
                />)
            }
            <Stack spacing={2} sx={{ flexGrow:2}}>
                <BorderLinearProgress variant='determinate' classes={{colorPrimary:"red"}} value={(left/total) * 100} />
            </Stack>
            ${left} / ${total}<br />
        </div>
    )
}
