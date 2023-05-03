import React from 'react';
import image from '../../assets/head image.jpg'
const HeaderProfile = () => {
    return (
        // <div style={{ position: 'relative' }}>
        //     <img src={image} alt="" />
        //     <div className='text-white' style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        //         <h6 className=' text-4xl font-bold'>Choose Your Special Dish From The Special Chef</h6>
        //         <p>Now It is easy to enjoy the world best desh just in some times.Take your special dish.</p>

        //     </div>
        //     <button class="btnStyle " style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>See All</button>
        // </div>
        <div className="card card-side bg-red-100 	lg:p-20">
            <div className="card-body text-left">
                <h2 className="card-title text-4xl font-bold text-red-600">Choose You Special Dish from Your Special Chef</h2>
                <p className='font-semibold text-red-950'>A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine.</p>
               <p>  <button className="btn btn-wide bg-red-950 hover:bg-red-800  hover:border-red-600">Order Now</button> </p>
            </div>
            <div className="avatar">
                <div className="lg:w-96 md:w-96 rounded-xl">
                    <img src={image} />
                </div>
            </div>
        </div>
    );
};

export default HeaderProfile;