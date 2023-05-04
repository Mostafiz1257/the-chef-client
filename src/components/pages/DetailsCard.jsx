import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailsCard = () => {
    const { id } = useParams();
    const [data, setData] = useState({})
    const [disabled, setDisable] = useState(false)
    useEffect(() => {
        fetch(`https://the-chef-server-opal.vercel.app/allData/${id}`)
            // fetch(`http://localhost:5000/allData/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const { name, picture, bio, totalLikes, recipes, experience } = data
    const notify = () => {
        toast("Added to Favorite",
            setDisable(true)
        )
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
                    <p className='font-semibold'>Exprience: {experience}</p>
                </div>
            </div>

            <div>
                <h4 className='text-3xl font-bold text-center underline mb-12 text-red-600'> Recipe </h4>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-clos-3 mb-12'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='text-2xl'>Spaghetti Bolognese</p>
                        <p><span className='underline font-bold'>Item:</span><br />
                            spaghetti <br />
                            ground beef <br />
                            onion <br />
                            garlic <br />
                        </p>
                        <p><span className='underline font-bold'>Method:</span> Cook the spaghetti according to the package instructions.",
                            "In a large pan, cook the ground beef over medium-high heat until browned.",
                            "Add the onion and garlic to the pan and cook until softened.",
                            "Stir in the canned tomatoes, tomato paste, red wine, bay leaf, salt, and pepper. </p>
                            <p>Ratings : 4.8</p>
                        <button onClick={notify} className="btn btn-wide">Add Favorite</button>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                    <p className='text-2xl'>Nigella Lawson</p>
                        <p><span className='underline font-bold'>Item:</span><br />
                            spaghetti <br />
                           Egg <br />
                            onion <br />
                           
                        </p>
                        <p><span className='underline font-bold'>Method:</span> Cook the cook the ground beef over medium-high heat until browned.",
                            "Add the onion and garlic to the pan and cook until softened.",
                            "Stir in the canned tomatoes, tomato paste, red wine, bay leaf, salt, and pepper. </p>
                            <p>Ratings: 5</p>
                        <button onClick={notify} className="btn btn-wide">Add Favorite</button>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                    <p className='text-2xl'>Chocolate Chip Cookies</p>
                        <p><span className='underline font-bold'>Item:</span><br />
                        garlic <br />
                            ground beef <br />
                           MAsala<br />
                            garlic <br />
                        </p>
                        <p><span className='underline font-bold'>Method:</span> Cook the 
                            "Add the onion and garlic to the pan and cook until softened.",
                            "Stir in the canned tomatoes, tomato paste, red wine, bay leaf, salt, and pepper. </p>
                            <p>Ratings : 4.5</p>
                        <button onClick={notify} className="btn btn-wide">Add Favorite</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsCard;