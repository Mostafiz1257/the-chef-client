import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
const SingleCard = ({ data }) => {
    const { id, name, picture, experience, recipes, totalLikes } = data
    return (

        <div className="card w-64 bg-base-100 shadow-xl m-5">
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
                    <button class="bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        See Details
                    </button>
                </div>
            </div>
        </div>

    );
};

export default SingleCard;