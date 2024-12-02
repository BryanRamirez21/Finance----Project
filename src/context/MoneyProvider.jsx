import React, { useState } from 'react';
import { MoneyContext } from './MoneyConext';

export const MoneyProvider = ({children}) => {

    const [earns, setEarns] = useState({
        total:0,
        fifty:0,
        thirty:0,
        twenty:0
    });

    return (
        <MoneyContext.Provider value={{earns, setEarns}}>
            {children}
        </MoneyContext.Provider>
    )
}
