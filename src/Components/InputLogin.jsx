import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../UserLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const InputLogin = () => {
    const [Error, setError] = useState("");
    const [Succesfull, setSuccesfull] = useState(false)
    const [Showpass, setShowpass] = useState(false)
    const HandelSubmit = (event) => {
        event.preventDefault()
        console.log(Error)
        const Email = event.target.email.value
        const Password = event.target.password.value;
        const Chack = event.target.terms.checked;
        const Name = event.target.name.value;
        const Url = event.target.photo.value;
        // console.log(Name, Url)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;
        if (!Chack) {
            setError("Please Click the chack box")
            return;
        }
        if (passwordRegex.test(Password) === false) {
            setError("Your Password is Not strong...");
            return;
        }

        setError("")
        setSuccesfull(false)
        createUserWithEmailAndPassword(auth, Email, Password).then(res => {
            console.log(res)
            sendEmailVerification(auth.currentUser).then(() => {
                setSuccesfull(true)
                alert("Email send Successfully")
                const ProfileUpdate = {
                    displayName: Name,
                    photoURL: Url,
        
                };
                console.log(ProfileUpdate)
                updateProfile(auth.currentUser, ProfileUpdate).then(() => { console.log("User Profile Update")}).catch(res => console.log(res))
            }).catch()
        }).catch(error => setError(error.message))
        
    }
    return (
        <div className="hero ">
            <div className="hero-content ">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={HandelSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input name="name" type="text" className="input" placeholder="Enter Name" />
                                <label className="label">Photo Url</label>
                                <input name="photo" type="text" className="input" placeholder="Enter Photo Url" />
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <div className='relative'>
                                    <input type={Showpass ? "text" : "password"} name="password" className="input" placeholder="Password" />
                                    <button type='button' onClick={() => {
                                        setShowpass(!Showpass)
                                    }} className='absolute top-3 right-3'>{Showpass ? <FaEye ></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                                </div>

                                <label className="label">
                                    <input type="checkbox" name='terms' className="checkbox" />
                                    Remember me
                                </label>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        {
                            Error && <p className='text-red-500'>{Error}</p>
                        }
                        {
                            Succesfull && <p className='text-green-500 font-extralight'>User Create Succesfull</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputLogin;