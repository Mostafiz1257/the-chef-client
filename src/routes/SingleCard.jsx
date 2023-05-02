import React from 'react';

const SingleCard = ({singleData}) => {
    const {id}=singleData
    return (
        <div>
            <p>{id}</p>
        </div>
    );
};

export default SingleCard;