import React from 'react';

const Review = () => {
    return (
        <div className='mt-12 mb-12'>
            <div className='pt-12 text-red-950 italic  mb-12'>
                <h6 className=' text-4xl font-bold underline'>Our International News Report</h6>
                <p className='font-semibold  mt-4'>Some International News is Published our News:</p>
            </div >
            <div className='grid lg:grid-cols-3 md:grid-cols-1 bg-red-100 p-12 gap-3'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/RBZGGh8/aa1.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Aljazira TV</h2>
                        <p>This is a international channel published our new on 20,4,2015...</p>
                        <button className="btn btn-sm">See News</button>
                       
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/TWYnRXp/aa2.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Somoy TV</h2>
                        <p>Bangladesh most popoulat tv news show our recipe every week in their tv show and the want to make a project with our chef.....</p>
                        <button className="btn btn-sm">See News</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/Chg5d9p/aa3.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">BBC News</h2>
                        <p>BBC news first get the the interview of the main chef in the baranch when we are so excited........</p>
                        <button className="btn btn-sm">See News</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;