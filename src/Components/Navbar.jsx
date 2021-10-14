import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Util/context'
import { MdOutlinePets, MdEvent, MdHome, MdGroups, MdPerson, MdContactPage, MdAttachMoney, MdLogin, MdAdminPanelSettings } from 'react-icons/md';

const Navbar = () => {
    const { changePage, activePage, toggleLogin, adminUser } = useGlobalContext()
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="logo2.png" alt="Logo" />
            </div>
            
            <div className="links">
                <Link className={activePage === 'home' ? 'active' : undefined} onClick={() =>{changePage('home')}} to='/'><MdHome /><span className="text">Home</span></Link>
                <Link className={activePage === 'events' ? 'active' : undefined} onClick={() => {changePage('events')}} to='/events'><MdEvent /><span className="text">Events</span></Link>
                <Link className={activePage === 'pets' ? 'active' : undefined} onClick={() => {changePage('pets')}} to='/pets'><MdOutlinePets /><span className="text">Pets</span></Link>
                <Link className={activePage === 'students' ? 'active' : undefined} onClick={() => {changePage('students')}} to='/students'><MdGroups /><span className="text">Students</span></Link>
                <Link className={activePage === 'about' ? 'active' : undefined} onClick={() => {changePage('about')}} to='/about'><MdPerson /><span className="text">About us</span></Link>
                <Link className={activePage === 'contact' ? 'active' : undefined} onClick={() => {changePage('contact')}} to='/contact'><MdContactPage /><span className="text">Contact</span></Link>
                <Link className={activePage === 'donate' ? 'active' : undefined} onClick={() => {changePage('donate')}} to='/donate'><MdAttachMoney /><span className="text">Donate</span></Link>
                {adminUser ? <Link className={activePage === 'admin' ? 'active' : undefined} onClick={() => {changePage('admin')}} to='/admin'><MdAdminPanelSettings /><span className="text">Admin</span></Link> : undefined}
            </div>

            <div className="login">
                <div className="user">
                    <img src="defaultProfilePicture.png" alt="Profile" />
                    <p className="username">Admin</p>
                </div>

                <div className="link">
                    <p onClick={() => toggleLogin('login')}> <MdLogin /> Login</p>
                    <p onClick={() => toggleLogin('signUp')}>Sign-up</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
