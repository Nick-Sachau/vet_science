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
                <div className="input">
                    <div className="username">
                        <IoPersonSharp className="icon"/>
                        <input type="text" className='username' placeholder="Username" />
                    </div>

                    <div className="password">
                        <RiLock2Fill className="icon"/>
                        <input type="password" name="password" id="password" className='Password' placeholder="Password" />
                    </div>
                </div>
                <div className="login">
                    <input className="submit" type="submit" value="Login" />
                </div>
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
