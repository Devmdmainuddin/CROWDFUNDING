import React from 'react';
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../Share/Header';

const Newsletter = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row h-[560px]  md:h-[380px] relative'>
                <div className='px-6 w-full md:w-[1355px] flex flex-col md:flex-row justify-between gap-16 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div>
                    <Header  text='Suscríbete a nuestra newsletter'></Header>
                        <div className='mt-[60px]'>
                            <form action="" className='flex gap-[10px]'>
                                <input type="email" className='w-[580px] py-4 pl-6 capitalize border-none outline-none bg-white text-[#696C76] rounded-[10px]' name="" id="" placeholder='Enter Email Address' />
                                <button className='inline-block py-5 px-[45px] text-white uppercase bg-[#0E1D52] rounded-[10px]' type="submit">Enviar</button>
                            </form>

                        </div>
                    </div>
                    <div>
                    <Header  text='Síguenos en'></Header>
                       
                        <div className='mt-[60px]'>
                            <ul className='flex gap-4'>
                                <li className='p-[18px] bg-white rounded-[10px]'>
                                    <Link><FaFacebookF className='text-[#425AB1]' /></Link>
                                </li>
                                <li className='p-[18px] bg-white rounded-[10px]'>
                                    <Link><FaTwitter className='text-[#03A9F4]' /></Link>
                                </li>
                                <li className='p-[18px] bg-white rounded-[10px]'>
                                    <Link><FaLinkedinIn className='text-[#0077B5]' /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-[#00B5FC] h-1/2 md:h-full w-full md:w-2/3'>

                </div>
                <div className='bg-[#0D71E5] h-1/2 md:h-full w-full md:w-1/3 '>

                </div>
            </div>

        </div>
    );
};

export default Newsletter;