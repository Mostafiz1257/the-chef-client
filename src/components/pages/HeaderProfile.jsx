import React from 'react';
import image from '../../assets/head image.jpg'
const HeaderProfile = () => {
    return (
        <div style={{ position: 'relative' }}>
            <img src={image} alt="" />
            <div className='text-white' style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <h6 className=' text-4xl font-bold'>Choose Your Special Dish From The Special Chef</h6>
                <p>Now It is easy to enjoy the world best desh just in some times.Take your special dish.</p>

            </div>
            <button class="btnStyle " style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>See All</button>
        </div>
    );
};

export default HeaderProfile;