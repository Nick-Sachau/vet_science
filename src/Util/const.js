import React from 'react'
import { About, Home, Calander, Contact, Donate, Pets, Students, Error, Admin } from '../Pages/'

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
        url: '/events',
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
        url: '/admin',
        text: 'Admin',
        page: <Admin />
    },
    {
        id: 9,
        url: '*',
        text: 'Error',
        page: <Error/>
    }
]

export const pets = [
    {
        id: 1,
        name: 'Rocket',
        age: '7 months',
        img: './pets/rocket.png',
        type: 'red nose pitbull',
        furColor: 'black',
        personality: {
            favoriteColor: '#38D5D5',
            mood: 'lazy',
        }
    },
    {
        id: 2,
        name: 'Peanut',
        age: '5 months',
        img: './pets/peanut.png',
        type: 'pitbull',
        furColor: 'brown',
        personality: {
            favoriteColor: '#DDE50C',
            mood: 'lazy',
        }
    },
    {
        id: 3,
        name: 'Jack',
        age: '3 months',
        img: './pets/jack.png',
        furColor: 'white brown spots',
        type: 'Jack Russle Terrier',
        personality: {
            favoriteColor: '#AD24F1',
            mood: 'lazy',
        }
    },
    {
        id: 4,
        name: 'Roxy',
        age: '7 months',
        img: './pets/roxy.png',
        furColor: 'white brown spots',
        type: 'Boxer Pitbull',
        personality: {
            favoriteColor: '#1EDB1C',
            mood: 'lazy',
        }
    },
    {
        id: 5,
        name: 'Cody',
        age: '9 months',
        img: './pets/cody.png',
        furColor: 'gold',
        type: 'golden retriver',
        personality: {
            favoriteColor: '#F29D11',
            mood: 'lazy',
        }
    },
    {
        id: 6,
        name: 'Bam Bam',
        age: '1 year',
        img: './pets/bamBam.png',
        type: 'blue nose pitbull',
        furColor: 'white',
        personality: {
            favoriteColor: '#E10931',
            mood: 'lazy',
        }
    },
]