import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid'
const Error = () => {
    // const [error, status] = useRouteError();
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <FaceFrownIcon className='w-40 h-40 text-yellow-500' />
                <div className='max-w-md text-center'>
                    <img src="https://i.ibb.co/1mNRfHB/404.webp" alt="" />
                    
                    <Link to='/' className='btn btn-wide mt-3'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Error;