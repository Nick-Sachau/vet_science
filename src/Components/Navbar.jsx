import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Util/context'
import { MdOutlinePets, MdEvent, MdHome, MdGroups, MdPerson, MdContactPage, MdAttachMoney } from 'react-icons/md';

const Navbar = () => {
    const { changePage, activePage, toggleLogin } = useGlobalContext()
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="logo.png" alt="Logo" />
            </div>
            
            <div className="links">
                <Link className={activePage === 'home' && 'active'} onClick={() => {changePage('home')}} to='/'><MdHome /><span className="text">Home</span></Link>
                <Link className={activePage === 'events' && 'active'} onClick={() => {changePage('events')}} to='/calander'><MdEvent /><span className="text">Events</span></Link>
                <Link className={activePage === 'pets' && 'active'} onClick={() => {changePage('pets')}} to='/pets'><MdOutlinePets /><span className="text">Pets</span></Link>
                <Link className={activePage === 'students' && 'active'} onClick={() => {changePage('students')}} to='/students'><MdGroups /><span className="text">Students</span></Link>
                <Link className={activePage === 'about' && 'active'} onClick={() => {changePage('about')}} to='/about'><MdPerson /><span className="text">About us</span></Link>
                <Link className={activePage === 'contact' && 'active'} onClick={() => {changePage('contact')}} to='/contact'><MdContactPage /><span className="text">Contact</span></Link>
                <Link className={activePage === 'donate' && 'active'} onClick={() => {changePage('donate')}} to='/donate'><MdAttachMoney /><span className="text">Donate</span></Link>
            </div>

            <div className="login">
                <div className="user">
                    <img src="defaultProfilePicture.png" alt="Profile Picture" />
                    <p className="username">username</p>
                </div>

                <div className="link">
                    <p onClick={toggleLogin('login')}>Login</p>
                    <p onClick={toggleLogin('signUp')}>Sign-up</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
