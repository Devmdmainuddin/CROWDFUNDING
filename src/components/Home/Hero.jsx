import React from 'react';
import Header from '../Share/Header';
import Container from '../Share/Container';
import { FaArrowRightLong } from 'react-icons/fa6';

const Hero = () => {
    return (

        <div className="  bg-[url('/image/hero.jpg')]">
            <Container>
                <div className=" w-full flex flex-col md:flex-row justify-between items-center ">
                    <div className=' content'>
                        <Header className='text-white max-w-[660px] text-[50px] leading-normal' text='Apoya a proyectos e iniciativas culturales'></Header>
                        <p className='maxw-[579px] my-10 text-xl font-normal leading-5 text-white'>Iniciativas singulares buscan apoyos para lanzar propuestas innovadoras que tienen una comunidad comprometida.</p>
                        <div className='flex gap-6'>
                            <button className='py-5 pl-8 bg-[#F4B511] text-white rounded-[10px] w-[280px] uppercase flex gap-6  items-center'>Envía tu propuestA  <FaArrowRightLong  className='bg-[#0E1D52] text-[#F4B511] text-3xl w-10 h-10 p-3 rounded-[10px]' /></button>
                            <button className='py-5 pl-8 text-white w-[280px] uppercase flex gap-3  items-center'>Descúbrelos <FaArrowRightLong  className=' text-3xl w-10 h-10 p-3 rounded-[10px]' /></button>
                        </div>

                    </div>
                    <div className=' flex gap-5 my-[50px]'>
                        <div className="">
                            <img className='w-[250px] h-[320px] object-cover rounded-2xl hover:border' src="/image/h1.png" alt="" />
                            <img className='mt-5 w-[250px] h-[320px] object-cover rounded-2xl hover:border' src="/image/h2.png" alt="" />
                        </div>
                        <div className='mt-[80px]'>
                            <img className='w-[250px] h-[320px] object-cover rounded-2xl hover:border' src="/image/h-3.png" alt="" />
                            <img className='mt-5 w-[250px] h-[320px] object-cover rounded-2xl hover:border' src="/image/h-4.png" alt="" />
                        </div>
                    </div>
                </div>
            </Container>


        </div>


    );
};

export default Hero;