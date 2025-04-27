import { FaGithub } from "react-icons/fa6";
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './UserLogin';
import { FaSignOutAlt } from "react-icons/fa";


const Login = () => {
    const [User, setUser] = useState(null)
    const provider = new GoogleAuthProvider()
    const GitHubProvider = new GithubAuthProvider()
    const HandelLogin = () => {
        signInWithPopup(auth, provider).then(res =>
            setUser(res.user)).catch(res => console.log(res))
        console.log("login")
    }
    const HandelREmove = () => {
        signOut(auth).then(() => setUser(null)).catch(error => console.log(error))
    }
    const HandelGithub = () => {
        signInWithPopup(auth, GitHubProvider).then(res => console.log(res)).catch(res => console.log(res))
    }
    return (
        <div className="">
            {
                User ? <span className='flex items-center'> <button onClick={HandelREmove} className='btn btn-active'> <FaSignOutAlt size={22} /> Sing Out</button></span> : <>
                    <span className='flex items-center'> <button onClick={HandelLogin} className='btn btn-active'> <FcGoogle size={22} /> Login With Google</button></span>
                    <span className='flex items-center pt-3'> <button onClick={HandelGithub} className='btn btn-active'> <FaGithub size={22} /> Login With Github</button></span>
                </>

            }
            <div>
                {
                    User && <div className='py-9'>
                        <img className='rounded-2xl' src={User.photoURL} />
                        <h1>name: {User.displayName}</h1>
                        <h1>email: {User.email}</h1>
                        <h1></h1>
                    </div>
                }
            </div>
        </div>
    );
};

export default Login;