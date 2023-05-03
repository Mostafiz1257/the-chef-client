import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut =()=>{
        logOut()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="navbar bg-cyan-950 text-neutral-content mt-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </div>
                <a className="btn btn-ghost normal-case text-xl">Food House</a>
            </div>
            <ul className=''>
                <Link to='/'><li className='mr-4'>Home</li></Link>
                <li className='mr-4'>Blog</li>
                <li className='mr-4'>Feature</li>
                <li className='mr-4'>Contract</li>
             
                {
                    user ?<li> <button onClick={handleLogOut} className="btn bg-teal-900">Log Out</button>
                    </li>:
                     <Link to='/login'> <li> <button className="btn bg-teal-900">Login</button>
                    </li></Link> 
                        
                }
            </ul>

            <div className="navbar-center hidden lg:flex">

            </div>
        </div>
    );
};

export default Navbar;