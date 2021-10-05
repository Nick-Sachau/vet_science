import React from 'react'
import { BsXLg } from 'react-icons/bs'
import { useGlobalContext } from '../Util/context'
import { IoPersonSharp } from 'react-icons/io5'
import { RiLock2Fill } from 'react-icons/ri'

const Login = ({ type }) => {
    const{ toggleLogin } = useGlobalContext()

    if(type) {
        return (
            <div className='loginMenu'>
                <BsXLg onClick={toggleLogin} className="exit"/>
                <h1 className="title">Login</h1>
                <IoPersonSharp />
                <RiLock2Fill />
            </div>
        )
    }
    return (
        <div className="signupMenu">
            Sign up
        </div>
    )
    
}

export default Login
