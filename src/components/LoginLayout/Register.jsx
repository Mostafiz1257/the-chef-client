import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Navbar from '../Main/Navbar';
import Footer from '../Main/Footer';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { updateProfile } from 'firebase/auth';
const Register = () => {
    const { createUser,profileUpdate } = useContext(AuthContext)
    const [error, setError,] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError("password must be at least 6 digit")
        }
        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const createdUSer = result.user
                profileUpdate({displayName:name,photoURL:photo})
                console.log(createdUSer);
                updateUserData(result.user,name)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const updateUserData =(name,user)=>{
        updateProfile(user,{
            displayName: name
           
        })
        .then(result=>{
            console.log('user name updated');
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center bg-slate-900	 h-screen'>
                <h4 className='text-3xl font-bold text-white'>Please Register Here</h4>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Enter name" name='name' className="input input-bordered w-full max-w-xs mt-4" required />
                    <br />
                    <input type="text" placeholder="Enter your photo Url" name='photo' className="input input-bordered w-full max-w-xs mt-4" required />
                    <br />
                    <input type="email" placeholder="Enter Email" name='email' className="input input-bordered w-full max-w-xs mt-4" required />
                    <br />
                    <input type="password" placeholder="Enter password" name='password' className="input input-bordered w-full max-w-xs mt-4" required />
                    <br />
                    <p className='text-red-400'>{error}</p>
                    <button class="btn w-64 rounded-full mt-4">Register</button>
                    <p className=' text-center text-white mt-4'>Already have accounts ? <Link to='/login'><span className='text-green-500 underline'>Login</span></Link> here</p>
                  
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;