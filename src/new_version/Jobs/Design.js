import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Design = () => {
    const secondSectionRef = useRef(null); // Ref for the second section

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        const cursorRounded = document.querySelector('.rounded');
        const firstSection = document.querySelector('.section-area');

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

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY); // Update scroll position on scroll
        };

        window.addEventListener('scroll', handleScroll); // Listen for scroll events

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
        };
    }, []);

    // Calculate translateY value based on scroll position
    const translateYValue = scrollPosition > 50 ? 'translateY(100vh) scale(0.7)' : 'translateY(0)';
    const backgroundImageCircle = scrollPosition < 50 ? 'radial-gradient(#ea891d, #ffe4c6)' : '';
    const text1 = scrollPosition > 50 ? (
        <svg className="text-white mx-auto w-32 h-32" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M12 0a12 12 0 0 0-4.82 23c-.03-.85 0-1.85.21-2.76l1.55-6.54s-.39-.77-.39-1.9c0-1.78 1.03-3.1 2.32-3.1 1.09 0 1.62.81 1.62 1.8 0 1.09-.7 2.73-1.06 4.25-.3 1.27.63 2.31 1.89 2.31 2.27 0 3.8-2.92 3.8-6.38 0-2.63-1.77-4.6-4.99-4.6a5.68 5.68 0 0 0-5.9 5.75c0 1.05.3 1.78.78 2.35.23.27.26.37.18.67l-.25.97c-.08.3-.32.4-.6.3-1.67-.69-2.46-2.52-2.46-4.59 0-3.4 2.88-7.5 8.58-7.5 4.58 0 7.6 3.32 7.6 6.88 0 4.7-2.62 8.22-6.48 8.22-1.3 0-2.51-.7-2.93-1.5l-.84 3.3c-.26.93-.76 1.86-1.21 2.58A11.99 11.99 0 0 0 24 12 12 12 0 0 0 12 0z" />
        </svg>
    ) : (
        'Pinterest'
    );
    const text2 = scrollPosition > 50 ? (
        <svg className="text-white mx-auto w-16 h-16" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
    ) : (
        'Art'
    );
    const text3 = scrollPosition > 50 ? (
        <svg className="text-white mx-auto w-16 h-16" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="pink" stroke="pink" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    ) : (
        <svg className="text-pink mx-auto w-16 h-16" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    );
    const text4 = scrollPosition > 50 ? (
        <svg className="mx-auto w-32 h-32" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5.2 9l-3 3 3 3M9 5.2l3-3 3 3M15 18.9l-3 3-3-3M18.9 9l3 3-3 3M3.3 12h17.4M12 3.2v17.6" /></svg>
    ) : (
        'Figma'
    );

    return (
        <>
            <div className="section-area cursor-none">
                <section
                    className="lg:h-screen min-h-screen bg-gradient-radial from-[#323232] to-[#53524d] content-center"
                >
                    <div className="rounded"></div>
                    <div className="px-8 lg:py-0 py-8 md:px-auto flex flex-col items-center justify-center h-full">
                        {/* Introduction Section */}
                        <div className="mx-auto text-center font-yeseva text-white lg:text-8xl md:text-5xl text-4xl mb-2">
                            What I <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Designed</span>
                        </div>
                        <div className="mx-auto mt-0 lg:mt-8 text-center font-yeseva text-white lg:text-3xl border border-white rounded-full py-2 px-5 md:text-4xl text-4xl mb-2">
                            @designsbySoffia
                        </div>
                        {/* Grid Section */}
                        <div className="flex grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 mx-auto">
                        </div>
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
                    <div
                        className="absolute hidden lg:block top-24 -left-1 transform -translate-x-1/2 transition-all duration-500 ease-in-out delay-100"
                        style={{ transform: translateYValue }}
                    >
                        <button style={{ backgroundImage: backgroundImageCircle }} className="font-yeseva h-72 w-72 rounded-full border border-white bg-transparent text-white lg:text-5xl md:text-xl text-lg shadow-lg transition-all duration-200">{text1}</button>
                    </div>
                    <div
                        className="absolute hidden lg:block bottom-36 -left-1 transform -translate-x-1/2 transition-all duration-500 ease-in-out delay-400"
                        style={{ transform: translateYValue }}
                    >
                        <button style={{ backgroundImage: backgroundImageCircle }} className="font-yeseva h-32 w-32 rounded-full border border-white bg-transparent text-white lg:text-5xl md:text-xl text-lg shadow-lg transition-all duration-200">{text3}</button>
                    </div>
                    <div
                        className="absolute hidden lg:block bottom-36 right-12 transform -translate-x-1/2 transition-all duration-500 ease-in-out delay-200"
                        style={{ transform: translateYValue }}
                    >
                        <button style={{ backgroundImage: backgroundImageCircle }} className="font-yeseva h-72 w-72 rounded-full border border-white bg-transparent text-white lg:text-5xl md:text-xl text-lg shadow-lg transition-all duration-200">{text4}</button>
                    </div>
                    <div
                        className="absolute hidden lg:block top-24 right-10 transform -translate-x-1/2 transition-all duration-500 ease-in-out delay-300"
                        style={{ transform: translateYValue }}
                    >
                        <button style={{ backgroundImage: backgroundImageCircle }} className="font-yeseva h-32 w-32 rounded-full border border-white bg-transparent text-white lg:text-5xl md:text-xl text-lg shadow-lg transition-all duration-200">{text2}</button>
                    </div>
                </section>
                <section ref={secondSectionRef} className="webdev-section h-auto bg-gradient-radial from-[#323232] to-[#53524d]">
                    <div className="px-8 lg:py-0 py-8 md:px-auto flex flex-col items-center justify-center h-full">
                        <div className="flex grid grid-cols-1 lg:grid-cols-1 gap-x-8 gap-y-8 mx-auto">
                            <div className="text-center font-yeseva text-white lg:text-6xl md:text-5xl text-4xl pt-32 mb-2">
                                <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Canva Templates</span>
                            </div>
                            <div className='flex grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-x-8 lg:mx-64 mx-0 lg:mb-12 my-3'>
                                <div className="mx-5 my-4">
                                    <div className="border-2 border-white rounded-2xl">
                                        <img className="rounded-tl-2xl rounded-tr-2xl" src="assets/images/design/shop/powerpoint1.png" alt='Dreamy Project Presentation Template' />
                                        <div className="bg-gradient-radial from-[#323232] to-[#53524d] rounded-bl-2xl rounded-br-2xl py-4 text-center">
                                            <div className="font-raleway text-lg text-center text-white">
                                                Dreamy Project Presentation Template
                                            </div>
                                            <a className="" href="https://lynk.id/designsbysoffia/9LDQNYN" target='blank'>
                                                <button
                                                    className="font-sans mt-3 relative h-10 lg:h-8 w-40 lg:w-40 md:w-72 rounded-full overflow-hidden border border-white 
                    text-white lg:text-lg md:text-2xl text-lg font-extralight shadow-2xl transition-all duration-200 before:absolute 
                    before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#c9819d] hover:-translate-y-1 hover:border-[#c9819d]
                    before:duration-300 before:ease-out hover:text-white hover:shadow-[#f46b455e] hover:before:h-40 hover:before:w-80 hover:before:opacity-80">
                                                    <span className="relative z-10">I Want This!</span>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-5 my-4">
                                    <div className="border-2 border-white rounded-2xl">
                                        <img className="rounded-tl-2xl rounded-tr-2xl" src="assets/images/design/shop/powerpoint2.png" alt='Mathematical Presentation Theme Template' />
                                        <div className="bg-gradient-radial from-[#323232] to-[#53524d] rounded-bl-2xl rounded-br-2xl py-4 text-center">
                                            <div className="font-raleway text-lg text-center text-white mx-4">
                                                Mathematical Presentation Theme Template
                                            </div>
                                            <a className="" href="https://lynk.id/designsbysoffia/NbdOwG5" target='blank'>
                                                <button
                                                    className="font-sans mt-3 relative h-10 lg:h-8 w-40 lg:w-40 md:w-72 rounded-full overflow-hidden border border-white 
                    text-white lg:text-lg md:text-2xl text-lg font-extralight shadow-2xl transition-all duration-200 before:absolute 
                    before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#c9819d] hover:-translate-y-1 hover:border-[#c9819d]
                    before:duration-300 before:ease-out hover:text-white hover:shadow-[#f46b455e] hover:before:h-40 hover:before:w-80 hover:before:opacity-80">
                                                    <span className="relative z-10">I Want This!</span>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-5 my-4">
                                    <div className="border-2 border-white rounded-2xl">
                                        <img className="rounded-tl-2xl rounded-tr-2xl" src="assets/images/design/shop/resumebro.png" alt='Modern Professional Resume' />
                                        <div className="bg-gradient-radial from-[#323232] to-[#53524d] rounded-bl-2xl rounded-br-2xl py-4 text-center">
                                            <div className="font-raleway text-lg text-center text-white mx-4">
                                                Modern Professional Resume
                                            </div>
                                            <a className="" href="https://lynk.id/designsbysoffia/OrNWdoB" target='blank'>
                                                <button
                                                    className="font-sans mt-3 relative h-10 lg:h-8 w-40 lg:w-40 md:w-72 rounded-full overflow-hidden border border-white 
                    text-white lg:text-lg md:text-2xl text-lg font-extralight shadow-2xl transition-all duration-200 before:absolute 
                    before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#c9819d] hover:-translate-y-1 hover:border-[#c9819d]
                    before:duration-300 before:ease-out hover:text-white hover:shadow-[#f46b455e] hover:before:h-40 hover:before:w-80 hover:before:opacity-80">
                                                    <span className="relative z-10">I Want This!</span>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-5 my-4">
                                    <div className="border-2 border-white rounded-2xl">
                                        <img className="rounded-tl-2xl rounded-tr-2xl" src="assets/images/design/shop/resume2bro.png" alt='Dynamic Black and Orange Resume' />
                                        <div className="bg-gradient-radial from-[#323232] to-[#53524d] rounded-bl-2xl rounded-br-2xl py-4 text-center">
                                            <div className="font-raleway text-lg text-center text-white mx-4">
                                                Dynamic Black and Orange Resume
                                            </div>
                                            <a className="" href="https://lynk.id/designsbysoffia/5yDZKlq" target='blank'>
                                                <button
                                                    className="font-sans mt-3 relative h-10 lg:h-8 w-40 lg:w-40 md:w-72 rounded-full overflow-hidden border border-white 
                    text-white lg:text-lg md:text-2xl text-lg font-extralight shadow-2xl transition-all duration-200 before:absolute 
                    before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#c9819d] hover:-translate-y-1 hover:border-[#c9819d]
                    before:duration-300 before:ease-out hover:text-white hover:shadow-[#f46b455e] hover:before:h-40 hover:before:w-80 hover:before:opacity-80">
                                                    <span className="relative z-10">I Want This!</span>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-5 my-4">
                                    <div className="border-2 border-white rounded-2xl">
                                        <img className="rounded-tl-2xl rounded-tr-2xl" src="assets/images/design/shop/planner.png" alt='Minimalist Pink Weekly Planner Template' />
                                        <div className="bg-gradient-radial from-[#323232] to-[#53524d] rounded-bl-2xl rounded-br-2xl py-4 text-center">
                                            <div className="font-raleway text-lg text-center text-white mx-4">
                                                Minimalist Pink Weekly Planner Template
                                            </div>
                                            <a className="" href="https://lynk.id/designsbysoffia/J7e30BB" target='blank'>
                                                <button
                                                    className="font-sans mt-3 relative h-10 lg:h-8 w-40 lg:w-40 md:w-72 rounded-full overflow-hidden border border-white 
                    text-white lg:text-lg md:text-2xl text-lg font-extralight shadow-2xl transition-all duration-200 before:absolute 
                    before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#c9819d] hover:-translate-y-1 hover:border-[#c9819d]
                    before:duration-300 before:ease-out hover:text-white hover:shadow-[#f46b455e] hover:before:h-40 hover:before:w-80 hover:before:opacity-80">
                                                    <span className="relative z-10">I Want This!</span>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Design;
