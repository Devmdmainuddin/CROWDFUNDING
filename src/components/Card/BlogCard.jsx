import React from 'react';

const BlogCard = () => {
    return (
        <>
            <div>
                <div className="image">
                    <img className="rounded-[15px] w-full object-cover" src="/image/b-1.jpg" alt="" />
                </div>
                <div className="content">
                    <h2 className="mt-[30px] mb-2.5 text-[22px] font-K2D font-semibold text-[#0E1D52]">OF BUTTONS</h2>
                    <p className="font-normal text-[#696C76]">Introducámosche or songbook Of Buttons. From this success it is called chama aínda hoxe ao diatonic accordion in many areas of Galiza.</p>
                    <div className='flex justify-between mt-11'>
                        <div className='flex gap-1'><span className='text-[#0E1D52] font-bold'>$2,283</span> <p className='text-[#696C76]'>Achieved</p></div>
                        <div className='flex gap-1'><span className='text-[#0E1D52] font-bold'>0</span><p className='text-[#696C76]'>Days Left</p></div>

                    </div>
                </div>
            </div>
            <div>
                <div className="image">
                    <img className="rounded-[15px] w-full object-cover" src="/image/b-2.jpg" alt="" />
                </div>
                <div className="content">
                    <h2 className="mt-[30px] mb-2.5 text-[22px] font-K2D font-semibold text-[#0E1D52]">ROCHI NOVOA</h2>
                    <p className="font-normal text-[#696C76]">Muller de papel aims to be something more than a collection of poetry, music, art and photography, it aims to be an open, poetic and musical exhibition.</p>
                    <div className='flex justify-between mt-11'>
                        <div className='flex gap-1'><span className='text-[#0E1D52] font-bold'>$2,283</span> <p className='text-[#696C76]'>Achieved</p></div>
                        <div className='flex gap-1'><span className='text-[#0E1D52] font-bold'>0</span><p className='text-[#696C76]'>Days Left</p></div>

                    </div>
                </div>
            </div>
            <div>
                <div className="image">
                    <img className="rounded-[15px] w-full object-cover" src="/image/b-3.jpg" alt="" />
                </div>
                <div className="content">
                    <h2 className="mt-[30px] mb-2.5 text-[22px] font-K2D font-semibold text-[#0E1D52]">GALICIAN TATTOOS</h2>
                    <p className="font-normal text-[#696C76]">This is an activity that seeks your help to complete a project of social participation and linguistic normalization.</p>
                    <div className='flex justify-between mt-11'>
                        <div className='flex gap-1'><span className='text-[#0E1D52] font-bold'>$2,283</span> <p className='text-[#696C76]'>Achieved</p></div>
                        <div className='flex gap-1'><span className='text-[#0E1D52] font-bold'>0</span><p className='text-[#696C76]'>Days Left</p></div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;