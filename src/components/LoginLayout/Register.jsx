import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name, photo, email, password);
        createUser(email,password)
        .then(result=>{
            const createdUSer = result.user
            console.log(createdUSer);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className=''>
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
                    <button class="btn w-64 rounded-full mt-4">Register</button>
                    <p className=' text-center text-white mt-4'>Already have accounts ? <Link to='/login'><span className='text-green-500 underline'>Login</span></Link> here</p>
                </form>
            </div>
        </div>
    );
};

export default Register;