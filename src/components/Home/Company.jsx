import React from 'react';
import Marquee from "react-fast-marquee";
import Container from '../Share/Container'
import img1 from '/image/c-1.png'
import img2 from '/image/c-2.png'
import img3 from '/image/c-3.png'
import img4 from '/image/c-4.png'
import img5 from '/image/c-5.png'
import img6 from '/image/c-6.png'


const Company = () => {
    return (
        <div>
            <Container>
                <h2 className='mt-[70px] text-center text-3xl font-semibold text-[#0E1D52] font-K2D'>Con el apoyo de…
                </h2>
            <Marquee>
                <div className='flex gap-10 pt-[50px] pb-[90px]'> 
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img1} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img2} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img3} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img4} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img5} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img6} alt="" />
                </div>
                
            </Marquee>
            </Container>
            
        </div>
    );
};

export default Company;