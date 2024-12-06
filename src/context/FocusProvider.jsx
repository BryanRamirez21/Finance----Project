import React, { useState } from 'react'
import { FocusContext } from './FocusContext'

export const FocusProvider = ({children}) => {

    const [isFocus, setisFocus] = useState(false)

    return (
        <FocusContext.Provider value={{isFocus, setisFocus}}>
            {children}
        </FocusContext.Provider>
    )
}
