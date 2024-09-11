import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../Share/Container";
import Header from "../Share/Header";


const Scard = () => {
    return (
        <div className="  bg-[url('/image/sbg.jpg')] p-[86px]">
            <Container>
                <Header middle='justify-center' className='text-[#0E1D52] flex justify-center after:left-1/2' text='Sobre Proyectos ITH'></Header>
                <p className="max-w-[572px] mx-auto text-center mt-6">Cada propuesta tiene un espacio en en el universo ITH, proyecto a proyecto construimos la cultura y reforzamos la comunidad</p>
                <div className="flex gap-5  justify-center">
                    <div className="w-[440px] bg-white p-8 rounded-lg mt-[53px] flex flex-col items-center">
                        <h2 className="max-w-[285px]  text-[#0E1D52] text-[22px] font-K2D font-semibold text-center uppercase">Apoya a proyectos e
                        iniciativas culturales.</h2>
                        <p className="my-6 text-center">Conoce cada propuesta al detalle, sus objetivos, calendario, acciones y a las personas promotoras.</p>
                        <button className=' text-[#0DBFE5]  uppercase flex gap-3  items-center'>Descúbrelos <FaArrowRightLong  className=' text-3xl w-10 h-10 p-3 rounded-[10px]' /></button>
                    </div>
                    <div className="w-[440px] bg-white p-8 rounded-lg mt-[53px] flex flex-col items-center">
                        <h2 className="max-w-[285px]  text-[#0E1D52] text-[22px] font-K2D font-semibold text-center uppercase">¡Te Ayudamos!</h2>
                        <p className="my-6 text-center">Si tienes una idea, quieres hacer los pasos para ponerla en marca, no dudes en ponerte en contacto con nuestro equipo..</p>
                        <button className='text-[#0DBFE5]  uppercase flex gap-3  items-center'>¡Quiero saber más! <FaArrowRightLong  className=' text-3xl w-10 h-10 p-3 rounded-[10px]' /></button>
                    </div>
                </div>

            </Container>

        </div>
    );
};

export default Scard;