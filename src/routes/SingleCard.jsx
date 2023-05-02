import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SingleCard = ({ data }) => {
    const { id, name, picture, experience, recipes, totalLikes } = data
    return (

        <div className="card w-96 bg-base-100 shadow-xl m-5">
            <figure><img className='object-cover h-64' src={picture} alt="Shoes" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title font-bold"> {name}</h2>
                <p className='font-bold'>Exprience: {experience}</p>
                <p className='font-semibold'>Recipe Item: {recipes.length}</p>
                <div className='flex align-items-center font-semibold'>
                    <span className='mr-3'><FaThumbsUp /></span>
                    <span> {totalLikes}</span>
                </div>
                <div className="card-actions justify-end">
                    {/* <button class="btnStyle">See Details</button> */}
                    <Link to={`/details/${id}`}><button class="btnStyle">View Recipes</button> </Link>
                </div>
            </div>
        </div>

    );
};

export default SingleCard;