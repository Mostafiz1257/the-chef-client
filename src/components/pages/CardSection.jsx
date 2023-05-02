import React, { useEffect, useState } from 'react';
import SingleCard from '../../routes/SingleCard';

const CardSection = () => {
    const [allData , setAllData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allData')
        .then(res=>res.json())
        .then(data=>setAllData(data))
    },[])
    return (
        <div>
           <div className='text-center	'>
           <h6 className=' text-4xl font-bold'>Select Your Chef</h6>
            <p className='text-semi bold'>Here is your all favorite chef with their special dish.</p>
           <div className=''>
           {
                allData.map(data=><SingleCard key={data.id}data={data}></SingleCard>)
            }
           </div>
           </div>

        </div>
    );
};

export default CardSection;