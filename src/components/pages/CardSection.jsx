import React, { useEffect, useState } from 'react';
import SingleCard from '../../routes/SingleCard';
import Branch from '../Main/Branch';

const CardSection = () => {
    const [allData, setAllData] = useState([])
    useEffect(() => {
        fetch('https://the-chef-server-opal.vercel.app/allData')
        // fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <div className='pt-12 text-red-950 italic'>
                <h6 className=' text-4xl font-bold '>Meet With Your Favorite Chef</h6>
                <p className='font-semibold  mt-4'>Here is your all favorite chef with their special dish.</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-12 justify-items-center bg-red-100 '>
                    {
                        allData.map(data => <SingleCard key={data.id} data={data}></SingleCard>)
                    }
                </div>
                <Branch></Branch>
            </div>

        </div>
    );
};

export default CardSection;