import Header from '../Share/Header'
import Container from '../Share/Container'
const Pcard = () => {
    return (

        <>
            <div className="  bg-[url('/image/bg.jpg')] p-[86px]">
                <Container>
                    <Header className='text-white' text='¿Por qué ITH?'></Header>
                    <div className=" mt-[72px] flex flex-wrap gap-5">

                        {/* <div className="absolute top-0 right-0 left-0 -ml-5 mt-10 w-14 h-14 bg-gray-500 [clip-path:polygon(50%_0%,100%_50%,50%_100%,10.5%_56%,10.5%_49.3%,10.4%_45%)]" ></div> */}
                        <div className="mb-[50px] w-[300px] bg-[#16378D] group hover:bg-white relative  p-8  rounded-lg transition-all duration-300">
                            <div className="absolute top-0 left-0 -ml-5 mt-10 w-14 h-14 group-hover:bg-white bg-[#16378D]  [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] transition-all duration-300" ></div>
                            <h2 className='text-[65px] font-K2D font-semibold text-[#c6c6c6] group-hover:text-[#696C76]'>01</h2>
                            <h3 className='max-w-[122px] text-white text-xl font-K2D font-semibold group-hover:text-[#00B5FC]'>Crowdfunding sin límites</h3>
                            <p className="text-white font-normal mt-4 group-hover:text-[#696C76]">Si superas el objetivo mínimo que te has marcado, consigues recaudar todo sin más</p>
                        </div>


                        <div className="mt-[50px] w-[300px] bg-[#16378D] group hover:bg-white relative  p-8  rounded-lg transition-all duration-300">
                            <div className="absolute top-0 right-0 left-0 -ml-5 mt-10 w-14 h-14 group-hover:bg-white bg-[#16378D] [clip-path:polygon(50%_0%,100%_50%,50%_100%,10.5%_56%,10.5%_49.3%,10.4%_45%)] transition-all duration-300" ></div>
                            <h2 className='text-[65px] font-K2D font-semibold text-[#c6c6c6] group-hover:text-[#696C76]'>02</h2>
                            <h3 className=' text-white text-xl font-K2D font-semibold group-hover:text-[#00B5FC]'>Tú decides tu compromiso</h3>
                            <p className="text-white font-normal mt-4 group-hover:text-[#696C76]">Si superas el objetivo mínimo que te has marcado, consigues recaudar todo sin más</p>
                        </div>
                        <div className="mb-[50px] w-[300px] bg-[#16378D] group hover:bg-white relative  p-8  rounded-lg transition-all duration-300">
                            <div className="absolute top-0 right-0 left-0 -ml-5 mt-10 w-14 h-14 group-hover:bg-white bg-[#16378D] [clip-path:polygon(50%_0%,100%_50%,50%_100%,10.5%_56%,10.5%_49.3%,10.4%_45%)] transition-all duration-300" ></div>
                            <h2 className='text-[65px] font-K2D font-semibold text-[#c6c6c6] group-hover:text-[#696C76]'>03</h2>
                            <h3 className='max-w-[122px] text-white text-xl font-K2D font-semibold group-hover:text-[#00B5FC]'>Flexibilidad</h3>
                            <p className="text-white font-normal mt-4 group-hover:text-[#696C76]">Si superas el objetivo mínimo que te has marcado, consigues recaudar todo sin más</p>
                        </div>
                        <div className="mt-[50px] w-[300px] bg-[#16378D] group hover:bg-white relative  p-8  rounded-lg transition-all duration-300">
                            <div className="absolute top-0 right-0 left-0 -ml-5 mt-10 w-14 h-14 group-hover:bg-white bg-[#16378D] [clip-path:polygon(50%_0%,100%_50%,50%_100%,10.5%_56%,10.5%_49.3%,10.4%_45%)] transition-all duration-300" ></div>
                            <h2 className='text-[65px] font-K2D font-semibold text-[#c6c6c6] group-hover:text-[#696C76]'>04</h2>
                            <h3 className=' text-white text-xl font-K2D font-semibold group-hover:text-[#00B5FC]'>Datos en tiempo real</h3>
                            <p className="text-white font-normal mt-4 group-hover:text-[#696C76]">Si superas el objetivo mínimo que te has marcado, consigues recaudar todo sin más</p>
                        </div>

                    </div>
                </Container>
            </div>

        </>



    );
};

export default Pcard;