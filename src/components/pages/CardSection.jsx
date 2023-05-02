import React, { useEffect, useState } from 'react';
import SingleCard from '../../routes/SingleCard';

const CardSection = () => {
    const [allData, setAllData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    return (
        <div>
            <div className='text-center	mt-12'>
                <h6 className=' text-4xl font-bold'>Select Your Chef</h6>
                <p className='text-semi bold'>Here is your all favorite chef with their special dish.</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-12 justify-items-center	bg-slate-200	'>
                    {
                        allData.map(data => <SingleCard key={data.id} data={data}></SingleCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default CardSection;