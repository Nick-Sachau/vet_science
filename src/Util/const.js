import React from 'react'
import { About, Home, Calander, Contact, Donate, Pets, Students, Error } from '../Pages'

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
        page: <Home/>
    },
    {
        id: 2,
        url: '/about',
        text: 'About',
        page: <About/>
    },
    {
        id: 3,
        url: '/calander',
        text: 'Calander',
        page: <Calander/>
    },
    {
        id: 4,
        url: '/contact',
        text: 'Contact',
        page: <Contact/>
    },
    {
        id: 5,
        url: '/donate',
        text: 'Donate',
        page: <Donate/>
    },
    {
        id: 6,
        url: '/pets',
        text: 'Pets',
        page: <Pets/>
    },
    {
        id: 7,
        url: '/students',
        text: 'Students',
        page: <Students/>
    },
    {
        id: 8,
        url: '*',
        text: 'Error',
        page: <Error/>
    }
]