import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
       <div className=''>
         <div className='flex flex-col justify-center items-center bg-slate-900	 h-screen'>
            <h4 className='text-3xl font-bold text-white'>Please Log In</h4>
            <form className=''>
                <input  type="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs mt-4" />
                <br />
                <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs mt-4" />
                <br />
                <button class="btn w-64 rounded-full mt-4">Button</button>
                <p className=' text-center text-white mt-4'>No Accounts ? <Link to='/register'><span className='text-green-500 underline'>Register</span></Link> here</p>
            </form>
        </div>
       </div>
    );
};

export default Login;