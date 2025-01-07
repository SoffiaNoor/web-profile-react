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
                className={`fixed w-full z-20 top-0 start-0 pt-3 transition duration-300 border-b border-white 
                    ${scrolled || isMenuOpen ? 'bg-white-200 shadow-lg backdrop-blur-lg lg:scale-110 scale-100 pb-3' : 'bg-transparent'} 
                    font-raleway`}>
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                    <div className="flex lg:order-1">
                        <Link
                            to="/" className={`font-yeseva text-3xl transition ease-in delay-100 duration-100 block py-0 px-3 hover:scale-110 bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent ${isActive('/') ? 'font-bold' : ''}`}>
                            Soffia NA.
                        </Link>
                    </div>
                    <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                        <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden"
                            aria-controls="navbar-sticky" aria-expanded={isMenuOpen}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 17 14">
                                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center place-content-center w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
                        id="navbar-sticky">
                        <ul
                            className="font-raleway flex flex-col p-4 lg:p-0 mt-4 font-light tracking-widest lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 text-white">
                            <li>
                                <Link to="/about_me"
                                    className={`transition ease-in delay-100 duration-100 block py-2 px-3 hover:text-[#ea891d] hover:font-bold 
                                    ${isActive('/about_me') ? 'bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent font-bold' : ''}`}
                                    aria-current="page">ABOUT ME</Link>
                            </li>
                            <li>
                                <Link to="/my_skills"
                                    className={`transition ease-in delay-100 duration-100 block py-2 px-3 hover:text-[#ea891d] hover:font-bold 
                                    ${isActive('/my_skills') ? 'bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent font-bold' : ''}`}>
                                    MY SKILLS</Link>
                            </li>
                            <li>
                                <Link to="/resume"
                                    className={`transition ease-in delay-100 duration-100 block py-2 px-3 hover:text-[#ea891d] hover:font-bold 
                                    ${isActive('/resume') ? 'bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent font-bold' : ''}`}>
                                    RESUME</Link>
                            </li>
                            <li>
                                <Link to="/portfolio"
                                    className={`transition ease-in delay-100 duration-100 block py-2 px-3 hover:text-[#ea891d] hover:font-bold 
                                    ${isActive('/portfolio') ? 'bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent font-bold' : ''}`}>
                                    PORTFOLIO</Link>
                            </li>
                            <li>
                                <Link to="/gallery"
                                    className={`transition ease-in delay-100 duration-100 block py-2 px-3 hover:text-[#ea891d] hover:font-bold 
                                    ${isActive('/gallery') ? 'bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent font-bold' : ''}`}>
                                    GALLERY</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:block flex md:order-3">
                        <a href="/hire_me">
                            <button
                                className="font-sans relative h-10 lg:h-10 w-40 lg:w-40 md:w-72 rounded-full overflow-hidden border border-white 
                    text-white lg:text-xl md:text-2xl text-xl font-extralight shadow-2xl transition-all duration-200 before:absolute 
                    before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#f46b45] hover:-translate-y-1 hover:scale-110 hover:border-[#f46b45]
                    before:duration-300 before:ease-out hover:text-white hover:shadow-[#f46b455e] hover:before:h-40 hover:before:w-80 hover:before:opacity-80">
                                <span className="relative z-10">Hire Me</span>
                            </button>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;