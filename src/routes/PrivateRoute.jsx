import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
   const location = useLocation()
   const from = localStorage.state?.from?.pathname || '/'
   if(loading){
    return <button className="btn btn-square loading align-items-center justify-center m-12 text-center"></button>
   }
    if(user)
{
    return children;
}
    return (
     <Navigate state={{from:location}} to='/login' replace></Navigate>
    );
};

export default PrivateRoute;