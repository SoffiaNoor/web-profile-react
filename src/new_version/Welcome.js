import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Welcome = () => {
    const secondSectionRef = useRef(null); // Ref for the second section

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        const cursorRounded = document.querySelector('.rounded');
        const firstSection = document.querySelector('.first-section');

        const moveCursor = (e) => {
            const rect = firstSection.getBoundingClientRect();
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Check if the mouse is inside the first section
            if (
                mouseX >= rect.left &&
                mouseX <= rect.right &&
                mouseY >= rect.top &&
                mouseY <= rect.bottom
            ) {
                cursorRounded.style.opacity = '1';
                cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            } else {
                cursorRounded.style.opacity = '0'; // Hide cursor when outside
            }
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    const scrollToNextSection = () => {
        if (secondSectionRef.current) {
            secondSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredAI, setIsHoveredAI] = useState(false);
    const [isHoveredGD, setIsHoveredGD] = useState(false);
    return (
        <>
            <section
                className="first-section h-screen bg-gradient-radial from-[#323232] to-[#53524d] cursor-none before:bg-[#53524d] transition-all duration-200 before:absolute"
            >
                <div className="rounded"></div>
                <div className="px-8 md:px-auto flex items-center justify-center h-full">
                    <div className="mx-auto md:px-4 container gap-8">
                        <div className="flex flex-col justify-center">
                            <div className="text-left">
                                <div style={{ lineHeight: 'normal' }}
                                    className="font-yeseva text-white lg:text-8xl md:text-5xl text-4xl transition ease-in delay-100 duration-500 hover:-translate-x-4">
                                    Crafting <span className="font-bold bg-gradient-radial from-[#f46b45] to-[#eea849] bg-clip-text text-transparent">Functional Designs</span>
                                </div>
                                <div style={{ lineHeight: 'normal' }}
                                    className="font-yeseva text-white lg:text-8xl md:text-5xl text-4xl transition ease-in delay-100 duration-500 hover:translate-x-4">
                                    and <span className="font-bold bg-gradient-radial from-[#f46b45] to-[#eea849] bg-clip-text text-transparent">Intelligent Solutions</span>
                                </div>
                                <div className="w-full mt-5 animate-slidein500 opacity-0">
                                    <div className="flex space-x-5">
                                        <a href="https://www.instagram.com/soffia.n.a/" target="_blank" rel="noreferrer" className="relative p-3 w-16 h-16 overflow-hidden font-medium text-gray-600 bg-transparent border border-[#FF8B00] shadow-inner group rounded-full content-center" style={{ textAlignLast: 'center' }}>
                                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-amber-300 group-hover:w-full ease"></span>
                                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-amber-300 group-hover:w-full ease"></span>
                                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-amber-300 group-hover:h-full ease"></span>
                                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-amber-300 group-hover:h-full ease"></span>
                                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-amber-500 opacity-0 group-hover:opacity-100"></span>
                                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"><i className="fab fa-instagram group-hover:text-white text-[#FF8B00] text-2xl md:text-3xl lg:text-4xl"></i></span>
                                        </a>
                                        <a href="https://www.linkedin.com/in/soffianooraisyah/" target="_blank" rel="noreferrer" className="relative p-3 w-16 h-16 overflow-hidden font-medium text-gray-600 bg-transparent border border-[#FF8B00] shadow-inner group rounded-full content-center" style={{ textAlignLast: 'center' }}>
                                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-amber-300 group-hover:w-full ease"></span>
                                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-amber-300 group-hover:w-full ease"></span>
                                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-amber-300 group-hover:h-full ease"></span>
                                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-amber-300 group-hover:h-full ease"></span>
                                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-amber-500 opacity-0 group-hover:opacity-100"></span>
                                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"><i className="fab fa-linkedin group-hover:text-white text-[#FF8B00] text-2xl md:text-3xl lg:text-4xl"></i></span>
                                        </a>
                                        <a href="https://github.com/SoffiaNoor" target="_blank" rel="noreferrer" className="relative p-3 w-16 h-16 overflow-hidden font-medium text-gray-600 bg-transparent border border-[#FF8B00] shadow-inner group rounded-full content-center" style={{ textAlignLast: 'center' }}>
                                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-amber-300 group-hover:w-full ease"></span>
                                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-amber-300 group-hover:w-full ease"></span>
                                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-amber-300 group-hover:h-full ease"></span>
                                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-amber-300 group-hover:h-full ease"></span>
                                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-amber-500 opacity-0 group-hover:opacity-100"></span>
                                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"><i className="fab fa-github group-hover:text-white text-[#FF8B00] text-2xl md:text-3xl lg:text-4xl"></i></span>
                                        </a>
                                    </div>
                                </div>
                                <div className="w-full mt-10 animate-slidein500 opacity-0">
                                    <a href="/portfolio">
                                        <button
                                            className="font-raleway relative h-12 lg:h-16 w-60 lg:w-80 md:w-72 rounded-full overflow-hidden border border-white text-white lg:text-3xl 
                                            md:text-2xl text-xl font-extralight shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 
                                            before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#f46b45] hover:-translate-y-1 hover:scale-110 hover:border-[#f46b45]
                                            before:duration-300 before:ease-out hover:text-white hover:shadow-[#f46b455e] hover:before:h-40 hover:before:w-80 hover:before:opacity-80">
                                            <span className="relative z-10">Explore My Work</span>
                                        </button>
                                    </a>
                                </div>
                                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                                    <button
                                        onClick={scrollToNextSection}
                                        className="font-raleway h-16 w-16 rounded-full border border-white text-white lg:text-2xl 
        md:text-xl text-lg shadow-lg hover:shadow-2xl hover:border-[#f46b45] hover:bg-[#f46b45] transition-all duration-200"
                                    >
                                        ↓
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={secondSectionRef}
                className="lg:h-screen min-h-screen bg-gradient-to-b from-[#4b4a46] to-[#20201e]"
            >
                <div className="px-8 lg:py-0 py-8 md:px-auto flex flex-col items-center justify-center h-full">
                    {/* Introduction Section */}
                    <div className="mx-auto lg:mt-0 mt-24 text-center font-yeseva text-white lg:text-7xl md:text-5xl text-4xl mb-2">
                        Hello!
                    </div>
                    
                </div>
            </section>
        </>
    );
};

export default Welcome;
