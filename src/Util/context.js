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

    const toggleLogin = (type) => {
        switch(type) {
            case 'login':
                dispatch({ type: 'SET_LOGIN' })
                break;
            case 'signUp':
                dispatch({ type: 'SET_SIGNUP' })
                break;
        }
    }

    return (
        <AppContext.Provider value={{ ...state, changePage, toggleLogin }} >
            { children }
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}