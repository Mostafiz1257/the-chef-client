import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const DetailsCard = () => {
    const { id } = useParams();
    const [data, setData] = useState({})
    const [disabled, setDisable] = useState(false)
    useEffect(() => {
        fetch(`https://the-chef-server-opal.vercel.app/allData/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const { name, picture, bio, totalLikes, recipes, experience } = data

    const handleClick = event => {
        event.currentTarget.disabled = true;
        toast.success('add to favorite')
        console.log('button clicked');
      };

    return (
        <div>
            <div className="card card-side bg-red-100 shadow-xl m-12">
                <div className="avatar">
                    <div className="w-96 rounded-xl">
                        <img src={picture} />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold text-red-600">{name}</h2>
                    <p className='font-semibold'>{bio}</p>
                    <p className='font-semibold'>Total Likes: {totalLikes}+</p>
                    <p className='font-semibold'>Recipe Items: {recipes?.length}</p>
                    <p className='font-semibold'>Experience: {experience}</p>
                </div>
            </div>
            <div>
                <h4 className='text-3xl font-bold text-center underline mb-12 text-red-600'> Recipe </h4>
            </div>
            <div>
                <div className="grid lg:grid-cols-3 md:grid-clos-3 mb-12">
                    {recipes?.map((recipe) => (
                        <div className='card w-96 bg-base-100 shadow-xl'>
                            <div className="card-body">
                                <p className='text-2xl underline'> {recipe?.name}</p>
                                <p><span className=' font-bold'> {recipe?.ingredients}</span><br />
                                </p>
                                <p><span className='font-bold'>Method</span> {recipe?.method}</p>
                                <p>Ratings: {recipe?.ratings}</p>
                                <button  onClick={handleClick}   className="btn btn-wide">Add Favorite</button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default DetailsCard;