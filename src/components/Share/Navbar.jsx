import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='my-6'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className="logo flex items-center"><img className='w-[50px] h-[50px]' src="/image/logo.png" alt="" />  <h3 className='text-xl font-medium'> <span className='text-[#00B5FC] '>ITH</span> CROWDFUNDING</h3></div>
                    <ul className="flex gap-6">
                        <li><Link>Proyectos ITH</Link></li>
                        <li><Link> Sobre nosotros </Link></li>
                        <li><Link> FAQ</Link></li>
                        <li><Link>The ITH Box</Link></li>
                        <li><Link> Contacto</Link></li>
                    </ul>
                </div>

            </Container>

        </div>
    );
};

export default Navbar;