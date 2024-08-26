import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <Helmet>
                <title>Soffia Noor Aisyah</title>
            </Helmet>
            <nav id="navbar"
                className={`fixed w-full z-20 top-0 start-0 pt-3 transition duration-300 ${(scrolled || isMenuOpen) ? 'bg-[#373737] shadow-lg' : 'bg-transparent'} font-raleway`}>
                <div
                    className="max-w-screen-xl flex flex-wrap items-center place-content-end md:place-content-center lg:place-content-center mx-auto p-4">
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
                            aria-controls="navbar-sticky" aria-expanded={isMenuOpen}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 17 14">
                                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center place-content-center w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
                        id="navbar-sticky">
                        <ul
                            className="flex flex-col p-4 md:p-0 mt-4 font-light tracking-widest md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white">
                            <li>
                                <Link to="/"
                                    className={`transition ease-in delay-100 duration-100 block py-2 px-3 hover:text-[#FF8B00] hover:underline hover:underline-offset-8 hover:decoration-4 hover:font-bold ${isActive('/') ? 'text-[#FF8B00] underline underline-offset-8 decoration-4 font-bold' : ''}`}
                                    aria-current="page">HOME</Link>
                            </li>
                            <li>
                                <Link to="/About"
                                    className={`transition ease-in delay-100 duration-100 block py-2 px-3 hover:text-[#FF8B00] hover:underline hover:underline-offset-8 hover:decoration-4 hover:font-bold ${isActive('/About') ? 'text-[#FF8B00] underline underline-offset-8 decoration-4 font-bold' : ''}`}
                                    aria-current="page">ABOUT ME</Link>
                            </li>
                            <li>
                                <Link to="/MySkills"
                                    className={`transition ease-in delay-100 duration-100 block py-2 px-3 hover:text-[#FF8B00] hover:underline hover:underline-offset-8 hover:decoration-4 hover:font-bold ${isActive('/MySkills') ? 'text-[#FF8B00] underline underline-offset-8 decoration-4 font-bold' : ''}`}
                                >MY SKILLS</Link>
                            </li>
                            <li>
                                <Link to="/Resume"
                                    className={`transition ease-in delay-100 duration-100 block py-2 px-3 hover:text-[#FF8B00] hover:underline hover:underline-offset-8 hover:decoration-4 hover:font-bold ${isActive('/Resume') ? 'text-[#FF8B00] underline underline-offset-8 decoration-4 font-bold' : ''}`}
                                >RESUME</Link>
                            </li>
                            <li>
                                <Link to="/Portfolio"
                                    className={`transition ease-in delay-100 duration-100 block py-2 px-3 hover:text-[#FF8B00] hover:underline hover:underline-offset-8 hover:decoration-4 hover:font-bold ${isActive('/Portfolio') ? 'text-[#FF8B00] underline underline-offset-8 decoration-4 font-bold' : ''}`}
                                >PORTFOLIO</Link>
                            </li>
                            <li>
                                <Link to="/Gallery"
                                    className={`transition ease-in delay-100 duration-100 block py-2 px-3 hover:text-[#FF8B00] hover:underline hover:underline-offset-8 hover:decoration-4 hover:font-bold ${isActive('/Gallery') ? 'text-[#FF8B00] underline underline-offset-8 decoration-4 font-bold' : ''}`}
                                >GALLERY</Link>
                            </li>
                            {/* <li>
                                <Link to="/Contact"
                                    className={`transition ease-in delay-100 duration-100 block py-2 px-3 hover:text-[#FF8B00] hover:underline hover:underline-offset-8 hover:decoration-4 hover:font-bold ${isActive('/Contact') ? 'text-[#FF8B00] underline underline-offset-8 decoration-4 font-bold' : ''}`}
                                >CONTACT</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
