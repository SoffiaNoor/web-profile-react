import React from 'react';

const Home = () => {
    return (
        <section
            className="font-raleway h-screen hero-bg"
            id="hero-section"
            style={{
                backgroundImage: `url(${window.innerWidth >= 1024 ? '/assets/images/hero.png' : '/assets/images/hero-mobile.png'})`,
                backgroundSize: 'cover',
            }}
        >
            <div className="px-8 md:px-auto flex items-center justify-center h-full">
                <div className="mx-auto md:px-4 container grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col items-start justify-center">
                        <div
                            className="font-extrabold animate-slidein500 opacity-0 text-white lg:text-6xl md:text-5xl text-3xl text-left">
                            Hi, My Name is<br />
                            <span
                                className="lg:text-7xl md:text-6xl text-4xl bg-gradient-to-r from-[#FF8B00] to-[#ff9f2c] bg-clip-text text-transparent">Soffia
                                Noor Aisyah</span>
                        </div>
                        <div className="mt-4 animate-slidein500 opacity-0">
                            <div
                                className="bg-gradient-to-r from-[#565550] to-[#2A2A2A] font-extrabold text-white lg:text-2xl text-xl py-3 px-4">
                                I’m a Web Developer and Graphic Designer
                            </div>
                        </div>
                        <div className="w-full mt-5 animate-slidein500 opacity-0">
                            <div className="flex space-x-5">
                                <a href="https://www.instagram.com/soffia.n.a/" target="_blank" rel="noreferrer" className="relative px-2 py-2 overflow-hidden font-medium text-gray-600 bg-transparent border border-[#FF8B00] shadow-inner group">
                                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-amber-300 group-hover:w-full ease"></span>
                                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-amber-300 group-hover:w-full ease"></span>
                                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-amber-300 group-hover:h-full ease"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-amber-300 group-hover:h-full ease"></span>
                                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-amber-500 opacity-0 group-hover:opacity-100"></span>
                                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"><i className="fab fa-instagram group-hover:text-[#040404] text-[#FF8B00] text-2xl md:text-3xl lg:text-4xl"></i></span>
                                </a>
                                <a href="https://www.linkedin.com/in/soffianooraisyah/" target="_blank" rel="noreferrer" className="relative px-2 py-2 overflow-hidden font-medium text-gray-600 bg-transparent border border-[#FF8B00] shadow-inner group">
                                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-amber-300 group-hover:w-full ease"></span>
                                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-amber-300 group-hover:w-full ease"></span>
                                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-amber-300 group-hover:h-full ease"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-amber-300 group-hover:h-full ease"></span>
                                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-amber-500 opacity-0 group-hover:opacity-100"></span>
                                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"><i className="fab fa-linkedin group-hover:text-[#040404] text-[#FF8B00] text-2xl md:text-3xl lg:text-4xl"></i></span>
                                </a>
                                <a href="https://github.com/SoffiaNoor" target="_blank" rel="noreferrer" className="relative px-2 py-2 overflow-hidden font-medium text-gray-600 bg-transparent border border-[#FF8B00] shadow-inner group">
                                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-amber-300 group-hover:w-full ease"></span>
                                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-amber-300 group-hover:w-full ease"></span>
                                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-amber-300 group-hover:h-full ease"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-amber-300 group-hover:h-full ease"></span>
                                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-amber-500 opacity-0 group-hover:opacity-100"></span>
                                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"><i className="fab fa-github group-hover:text-[#040404] text-[#FF8B00] text-2xl md:text-3xl lg:text-4xl"></i></span>
                                </a>
                            </div>
                        </div>
                        <div className="w-full mt-10 animate-slidein500 opacity-0">
                            <a href="/About">
                                <button
                                    className="relative h-12 lg:h-16 w-60 lg:w-80 md:w-72 overflow-hidden border border-[#FF8B00] text-[#FF8B00] lg:text-2xl md:text-2xl text-xl tracking-widest font-light shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#FF8B00] before:duration-300 before:ease-out hover:text-white hover:shadow-[#fdbe74b8] hover:before:h-40 hover:before:w-80 hover:before:opacity-80">
                                    <span className="relative z-10">EXPLORE MORE</span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;