import React, { useReducer, useContext, useEffect } from 'react'
import { reducer } from './useReducer'

const defaultState = {
    loading: false,
    animals: {},
    page: 0,
    thme: 'light',
    query: '',
    activePage: 'home',
}

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    // inert functions here
    const changePage = (newPage) => {
        dispatch({ type: 'SET_PAGE', payload: newPage })
    }

    return (
        <AppContext.Provider value={{ ...state, changePage }} >
            { children }
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}