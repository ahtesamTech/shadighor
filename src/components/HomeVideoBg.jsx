import React from 'react';
import img from '../assets/homeBg.jpg';

const HomeVideoBg = () => {
    return (
        
            // <video className='h-screen w-screen object-cover' src={vid} loop autoPlay muted></video>
            <img className='h-screen w-screen object-cover' src={img} ></img>
       
    );
};

export default HomeVideoBg;