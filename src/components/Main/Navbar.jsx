import React, { useContext } from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="flex bg-red-950 text-neutral-content  italic p-2 ">
            <div className="lg:grow md:grow ">

                <a className="btn btn-ghost font-bold normal-case text-3xl italic"> Chef Master</a>
            </div>
            <div>
                <ul className=' lg:flex md:flex items-center gap-3'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'default'}><li >Home</li></NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? 'active' : 'default'}><li >Blog</li></NavLink>
                    {/* <li><div className="avatar">
                        <div className="w-8 rounded cursor-pointer">
                            <img src={user?.photoURL} alt="Tailwind-CSS-Avatar-component" title={user ? user.displayName : 'profile is not set'} />
                        </div>
                    </div></li> */}
                    <li >
                        {
                            user ?
                           <div className='flex lg:items-center lg:gap-2 md:gap-2'>
                              
                              <li><div className="avatar">
                                        <div className="w-8 rounded cursor-pointer">
                                            <img src={user?.photoURL} alt="Tailwind-CSS-Avatar-component" title={user ? user.displayName : 'profile is not set'} />
                                        </div>
                                    </div></li>
                                    <button onClick={handleLogOut} className="btn bg-teal-900">Log Out</button>
                           </div>

                                :

                                <div>
                                    <Link to='/login'><button className="btn bg-teal-900">Login</button>
                                    </Link>
                                   
                                </div>
                        }
                    </li>
                </ul>
            </div>

            <div className="navbar-center hidden lg:flex">

            </div>
        </div>
    );
};

export default Navbar;