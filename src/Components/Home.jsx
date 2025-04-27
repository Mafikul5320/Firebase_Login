import React from 'react';
import Login from '../Login';
import InputLogin from './InputLogin';


const Home = () => {
    return (
        <div className='flex justify-center'>
            <Login></Login>
            <InputLogin></InputLogin>
        </div>
    );
};

export default Home;