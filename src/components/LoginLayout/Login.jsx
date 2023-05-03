import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';

import Footer from '../Main/Footer';
import Navbar from '../Main/Navbar';
const Login = () => {
 
  const { signIn, googleSignIn, githubLogIn } = useContext(AuthContext)
  const [error,setError]=useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'


  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const loggedUSer = result.user;
        console.log(loggedUSer);
       
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error);
        setError(error)
      })
  }
  const handleGoggle = () => {
    googleSignIn()
      .then(result => {
        const loggedUSer = result.user
        console.log(loggedUSer);
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error);
      })
  }
  const handleGithub = () => {
    githubLogIn()
      .then(result => {
        const loggedUSer = result.user;
        navigate(from, { replace: true })
        console.log(loggedUSer);
      })
      .catch(error => {
        console.log(error);
        
      })
  }
  return (
    <div className=''>
       <Navbar></Navbar>
      <div className='flex flex-col justify-center items-center bg-slate-900	 h-screen'>
        <h4 className='text-3xl font-bold text-white'>Please Log In</h4>
        <form onSubmit={handleLogIn}>
          <input type="email" placeholder="Enter Email" name='email' className="input input-bordered w-full max-w-xs mt-4" required />
          <br />
          <input type="password" placeholder="Enter password" name='password' className="input input-bordered w-full max-w-xs mt-4" required />
          <br />
          {
          error &&  <p className='text-red-400'>Password not Matching.try again..!!!</p>
         }
          <button class="btn w-64 rounded-full mt-4">Login</button>
          <p className=' text-center text-white mt-4'>No Accounts ? <Link to='/register'><span className='text-green-500 underline'>Register</span></Link> here</p>
          <p className=' text-center text-white mt-4 '>or</p>
          <div className='flex items-center justify-center mt-4 '>
            <p onClick={handleGoggle}><FaGoogle className='text-white hover:cursor-pointer'></FaGoogle></p>
            <p onClick={handleGithub}><FaGithub className='text-white ml-6 hover:cursor-pointer'></FaGithub></p>
          </div>
        </form>
      </div>
      <Footer></Footer>
     
    </div>
  );
};

export default Login;