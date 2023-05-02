import React from 'react';

const SingleCard = ({ data }) => {
    const { name, picture, experience, recipes, totalLikes } = data
    return (
        
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{experience}</p>
                    <p>{recipes.length}</p>
                    <p>{totalLikes}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See Details</button>
                    </div>
                </div>
            </div>
      
    );
};

export default SingleCard;