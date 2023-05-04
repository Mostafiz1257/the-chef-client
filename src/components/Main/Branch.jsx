import React from 'react';
import Review from './Review';

const Branch = () => {
    return (
        <div>
            <div className='mt-12'>
                <div className='pt-12 text-red-950 italic mb-12'>
                    <h6 className=' text-4xl font-bold underline '>Our Branch : </h6>
                    <p className='font-semibold  mt-4'>Here is your all favorite chef with their Location.</p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-1  bg-red-100 p-12 lg:gap-3 '>
                    <div className="card w-96 bg-gray-100 text-primary-content text-black shadow-2xl">
                        <div className="card-body text-red-950">
                            <h2 className="card-title font-bold text-3xl">London</h2>
                            <p>The Second rsturent was open in the city and it was so small and with a big heart when we are making with out good chef people are enjoying our food.</p>
                            <div className="card-actions justify-end">
                                <button className="btnStyle hover:bg-red-950">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-gray-100 text-primary-content text-black shadow-2xl">
                        <div className="card-body text-red-950">
                            <h2 className="card-title font-bold text-3xl">Liverpool City</h2>
                            <p>The Third rsturent was open in the city and it was so small and with a big heart when we are making with out good chef people are enjoying our food.</p>
                            <div className="card-actions justify-end">
                                <button className="btnStyle hover:bg-red-950">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-gray-100 text-primary-content text-black shadow-2xl">
                        <div className="card-body text-red-950">
                            <h2 className="card-title font-bold text-3xl">New Castle</h2>
                            <p>The First rsturent was open in the city and it was so small and with a big heart when we are making with out good chef people are enjoying our food.</p>
                            <div className="card-actions justify-end">
                                <button className="btnStyle hover:bg-red-950">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Review></Review>
        </div>
    );
};

export default Branch;