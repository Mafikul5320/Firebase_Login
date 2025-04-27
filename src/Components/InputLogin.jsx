import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../UserLogin';

const InputLogin = () => {
    const HandelSubmit = (event) => {
        event.preventDefault()
        const Email = event.target.email.value
        const Password = event.target.password.value
        createUserWithEmailAndPassword(auth, Email, Password).then(res => console.log(res)).catch(error=> console.log(error))
    }
    return (
        <div className="hero ">
            <div className="hero-content ">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={HandelSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputLogin;