import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from './UserLogin';

const UserLogin = () => {
    const [Error, setError] = useState("")
    const [Succesfull, setSuccesfull] = useState(false)
    const HandelSubmit = (e) => {
        e.preventDefault()
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        console.log(Email, Password);
        signInWithEmailAndPassword(auth, Email, Password).then(res => {
            console.log(res);
            if (!res.user.emailVerified) {
                alert("please first email verify")
            }
            else {
                setSuccesfull(true)
            }
        }).catch(res => setError(res.message))

    }
    const ForgetRef = useRef()
    const HandelForgetPassword = () => {
        const ForgetEmail = ForgetRef.current
        sendPasswordResetEmail(auth, ForgetEmail).then(()=> {}).catch(res=> res.message)
    }
    return (
        <div className="hero ">
            <div className="hero-content ">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={HandelSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <div className='relative'>
                                    <input type="password" name="password" className="input" placeholder="Password" />

                                </div>
                                <div ref={ForgetRef} onClick={HandelForgetPassword}><a className="link link-hover">Forgot password?</a></div>
                                <label className="label">
                                    <input type="checkbox" name='terms' className="checkbox" />
                                    Remember me
                                </label>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <p className='bg-red-500'>{Error}</p>
                        <h1>
                            {Succesfull && <p className='text-green-500 font-extrabold'>User Login Succesfully</p>}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;