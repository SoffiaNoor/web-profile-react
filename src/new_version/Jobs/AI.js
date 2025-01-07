import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AI = () => {
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
    const translateYValue = scrollPosition > 100 ? 'translateY(100vh) scale(1.1)' : 'translateY(0)';
    const backgroundImageCircle = scrollPosition > 100 ? 'radial-gradient(#ea891d, #ffe4c6)' : '';

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
                            What I <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Explored</span>
                        </div>
                        <div className="mx-auto mt-0 lg:mt-24 text-center font-yeseva text-white lg:text-8xl md:text-5xl text-4xl mb-2">
                            with AI
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
                        className="absolute lg:block hidden top-24 -left-1 transform -translate-x-1/2 transition-all duration-500 ease-in-out delay-100"
                        style={{ transform: translateYValue }}
                    >
                        <button style={{ backgroundImage: backgroundImageCircle }} className="font-yeseva h-72 w-72 rounded-full border border-white bg-transparent text-white lg:text-5xl md:text-xl text-lg shadow-lg transition-all duration-200">Machine Learning</button>
                    </div>
                    <div
                        className="absolute lg:block hidden bottom-36 -left-1 transform -translate-x-1/2 transition-all duration-500 ease-in-out delay-400"
                        style={{ transform: translateYValue }}
                    >
                        <button style={{ backgroundImage: backgroundImageCircle }} className="font-yeseva h-32 w-32 rounded-full border border-white bg-transparent text-white lg:text-5xl md:text-xl text-lg shadow-lg transition-all duration-200">Py</button>
                    </div>
                    <div
                        className="absolute lg:block hidden bottom-36 right-16 transform -translate-x-1/2 transition-all duration-500 ease-in-out delay-200"
                        style={{ transform: translateYValue }}
                    >
                        <button style={{ backgroundImage: backgroundImageCircle }} className="font-yeseva h-72 w-72 rounded-full border border-white bg-transparent text-white lg:text-5xl md:text-xl text-lg shadow-lg transition-all duration-200">Deep Learning</button>
                    </div>
                    <div
                        className="absolute lg:block hidden top-24 right-10 transform -translate-x-1/2 transition-all duration-500 ease-in-out delay-300"
                        style={{ transform: translateYValue }}
                    >
                        <button style={{ backgroundImage: backgroundImageCircle }} className="font-yeseva h-32 w-32 rounded-full border border-white bg-transparent text-white lg:text-5xl md:text-xl text-lg shadow-lg transition-all duration-200">AI</button>
                    </div>
                </section>
                <section ref={secondSectionRef} className="webdev-section lg:h-screen h-auto bg-gradient-radial from-[#323232] to-[#53524d]">
                    <div className="px-8 lg:py-0 py-8 md:px-auto flex flex-col items-center justify-center h-full">
                        <div className="flex grid grid-cols-1 lg:grid-cols-1 gap-x-8 gap-y-8 mx-auto">
                            <div className="text-center font-yeseva text-white lg:text-6xl md:text-5xl text-4xl mb-2">
                                <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Fashion Image Captioning</span>
                            </div>
                            <div className="lg:w-1/3 w-full mx-auto text-center font-raleway py-2 px-4 text-white lg:text-2xl text-md md:text-xl border border-white rounded-full shadow-2xl shadow-[#f46b455e]"
                            >
                                Laravel Framework & Python
                            </div>
                            <div className='flex grid lg:grid-cols-2 grid-cols-1 lg:px-16 px-1'>
                                <div className="lg:mx-5 mx-1 my-2">
                                    <img src="assets/images/AI/outputFACAD.png" className='inset-0 h-[15rem] w-full object-cover rounded-lg my-2' alt='Fashion Captioning Result' />
                                </div>
                                <div className='lg:mx-5 mx-1 my-2'>
                                    <img src="assets/images/AI/web1.png" className='inset-0 h-[15rem] w-full object-cover rounded-lg my-2' alt='Fashion Captioning UI' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="webdev-section lg:h-screen h-auto bg-gradient-radial from-[#323232] to-[#53524d]">
                    <div className="px-8 lg:py-0 py-8 md:px-auto flex flex-col items-center justify-center h-full">
                        <div className="flex grid grid-cols-1 lg:grid-cols-1 gap-x-8 gap-y-8 mx-auto">
                            <div className="text-center font-yeseva text-white lg:text-6xl md:text-5xl text-4xl mb-2">
                                <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Spooky Author
                                    Identification</span>
                            </div>
                            <div className="lg:w-1/3 w-full mx-auto text-center font-raleway py-2 px-4 text-white lg:text-2xl text-md md:text-xl border border-white rounded-full shadow-2xl shadow-[#f46b455e]"
                            >
                                Final Project TEEPxNTUST
                            </div>
                            <div className='flex grid lg:grid-cols-3 grid-cols-1 lg:px-16 px-1'>
                                <div className="lg:mx-5 mx-1 my-2">
                                    <img src="assets/images/AI/teep1.png" className='inset-0 h-[15rem] w-full object-cover rounded-lg my-2' alt='Final Project Concept' />
                                </div>
                                <div className='lg:mx-5 mx-1 my-2'>
                                    <img src="assets/images/AI/teep2.png" className='inset-0 h-[15rem] w-full object-cover rounded-lg my-2' alt='Final Project EDA' />
                                </div>
                                <div className='lg:mx-5 mx-1 my-2'>
                                    <img src="assets/images/AI/teep3.png" className='inset-0 h-[15rem] w-full object-cover rounded-lg my-2' alt='Final Project Result' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AI;
