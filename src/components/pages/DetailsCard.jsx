import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsCard = () => {
    const { id } = useParams();
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/allData/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const { name, picture, bio, totalLikes, recipes, experience } = data
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl m-12">
                <div className="avatar">
                    <div className="w-96 rounded-xl">
                        <img src={picture} />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold">{name}</h2>
                    <p className='font-semibold'>{bio}</p>
                    <p className='font-semibold'>Total Likes: {totalLikes}+</p>
                    <p className='font-semibold'>Recipe Items: {recipes?.length}</p>
                    <p className='font-semibold'>Exprience: {experience}</p>
                </div>
            </div>

            <div>
                <h4 className='text-3xl font-bold text-center underline mb-12'> Recipe </h4>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-clos-3 mb-12'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        {/* <h2 className="card-title">{recipes[0].name}</h2> */}
                        {/* <p>{recipes[0]?.name?.ingredients}</p> */}
                       
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        {/* <h2 className="card-title">{recipes[1]?.name}</h2> */}
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                       
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        {/* <h2 className="card-title">{recipes[2]?.name}</h2> */}
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsCard;