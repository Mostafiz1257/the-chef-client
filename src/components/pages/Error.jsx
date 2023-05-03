import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const [error,state]=useRouteError();
    return (
        <div>
            <h2><span>Error page is aschen bai</span>{state || 404}</h2>
            <p>the real news is: {error.message}</p>
        </div>
    );
};

export default Error;