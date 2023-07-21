'use client'

import React, {useReducer} from 'react'
import reducer from './reducer.js'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const defaultState = {
        toast: null
    }
    const [state,dispatch] = useReducer(reducer,defaultState)
    
    return (
        <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}