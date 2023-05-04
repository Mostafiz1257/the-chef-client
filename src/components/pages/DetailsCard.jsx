import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const DetailsCard = () => {
    const { id } = useParams();
    const [data, setData] = useState({})
    const [disabled,setDisable]=useState(false)
    useEffect(() => {
        fetch(`https://the-chef-server-opal.vercel.app/allData/${id}`)
        // fetch(`http://localhost:5000/allData/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const { name, picture, bio, totalLikes, recipes, experience } = data
    const notify = () =>{
        toast("Added to Favorite",
        setDisable(true)
        )} ;


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
                        {/* <h2 className="card-title">{recipes[0].name}</h2> */}
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <button disabled='disabled' onClick={notify} className="btn btn-wide">Add Favorite</button>
                        <ToastContainer/>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        {/* <h2 className="card-title">{recipes[1]?.name}</h2> */}
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <button disabled='disabled' onClick={notify} className="btn btn-wide">Add Favorite</button>
                        <ToastContainer/>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        {/* <h2 className="card-title">{recipes[2]?.name}</h2> */}
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <button  onClick={notify} className="btn btn-wide">Add Favorite</button>
                        <ToastContainer/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsCard;