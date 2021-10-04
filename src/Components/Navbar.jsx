import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Util/context'

const Navbar = () => {
    const { changePage, activePage } = useGlobalContext()
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="logo.png" alt="Logo" />
            </div>
            
            <div className="links">
                {activePage === 'home' && <span className='activeMark H'></span>}<Link onClick={() => {changePage('home')}} to='/'>Home</Link>
                {activePage === 'events' && <span className='activeMark E'></span>}<Link onClick={() => {changePage('events')}} to='/calander'>Events</Link>
                {activePage === 'pets' && <span className='activeMark P'></span>}<Link onClick={() => {changePage('pets')}} to='/pets'>Pets</Link>
                {activePage === 'students' && <span className='activeMark S'></span>}<Link onClick={() => {changePage('students')}} to='/students'>Students</Link>
                {activePage === 'about' && <span className='activeMark A'></span>}<Link onClick={() => {changePage('about')}} to='/about'>About us</Link>
                {activePage === 'contact' && <span className='activeMark C'></span>}<Link onClick={() => {changePage('contact')}} to='/contact'>Contact</Link>
                {activePage === 'donate' && <span className='activeMark D'></span>}<Link onClick={() => {changePage('donate')}} to='/donate'>Donate</Link>
            </div>
            
        </nav>
    )
}

export default Navbar
