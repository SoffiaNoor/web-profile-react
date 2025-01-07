import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WebDev = () => {
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

    return (
        <>
            <div className="section-area cursor-none">
                <section
                    className="lg:h-screen min-h-screen bg-gradient-to-b from-[#4b4a46] to-[#20201e] content-center"
                >
                    <div className="rounded"></div>
                    <div className="px-8 lg:py-0 py-8 md:px-auto flex flex-col items-center justify-center h-full">
                        {/* Introduction Section */}
                        <div className="mx-auto text-center font-yeseva text-white lg:text-8xl md:text-5xl text-4xl mb-2">
                            What I <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Created</span>
                        </div>
                        <div className="mx-auto mt-0 lg:mt-24 text-center font-yeseva text-white lg:text-8xl md:text-5xl text-4xl mb-2">
                            as Web Developer
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
                </section>
                <section ref={secondSectionRef} className="webdev-section lg:h-screen h-auto bg-gradient-to-t from-[#573018] to-[#20201e]">
                    <div className="px-8 lg:py-0 py-8 md:px-auto flex flex-col items-center justify-center h-full">
                        <div className="flex grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 mx-auto">
                            <div className="items-center place-content-center mx-auto lg:-translate-y-6 translate-y-0">
                                <img className="rounded-lg w-full" src="assets/images/webdev/java_1.png" alt='Java Residence' />
                            </div>
                            <div className="items-center place-content-center mx-auto lg:translate-y-6 translate-y-0">
                                <img className="rounded-lg w-full" src="assets/images/webdev/java_2.png" alt='Java Residence' />
                            </div>
                            <div className="col-span-2 lg:ml-5 ml-0 place-content-center">
                                <div className="text-left font-yeseva text-white lg:text-8xl md:text-5xl text-4xl mb-2">
                                    <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Java Residence</span>
                                </div>
                                <div className="w-1/3 text-center font-raleway my-4 py-2 px-4 text-white lg:text-2xl text-md md:text-xl  border border-white rounded-full shadow-2xl shadow-[#f46b455e]">
                                    2024
                                </div>
                                <div className="text-white w-2/3 text-2xl font-raleway mb-16">
                                    The Java Residence website is designed as a modern company profile platform to introduce the offered property services and facilities.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="lg:h-screen h-auto bg-gradient-to-t from-[#20201e] to-[#573018]">
                    <div className="px-8 lg:py-0 py-8 md:px-auto flex flex-col items-center justify-center h-full">
                        <div className="flex grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 mx-auto">
                            <div className="col-span-2 lg:ml-5 ml-0 place-content-center">
                                <div className="text-left font-yeseva text-white lg:text-8xl md:text-5xl text-4xl mb-2">
                                    <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Arima Indonesia</span>
                                </div>
                                <div className="w-1/3 text-center font-raleway my-4 py-2 px-4 text-white lg:text-2xl text-md md:text-xl border border-white rounded-full shadow-2xl shadow-[#f46b455e]">
                                    2024
                                </div>
                                <div className="text-white w-2/3 text-2xl font-raleway mb-16">
                                    The Arima Indonesia website is designed as a company profile platform with a modern design and user-friendly navigation.
                                </div>
                            </div>
                            <div className="items-center place-content-center mx-auto lg:-translate-y-6 translate-y-0">
                                <img className="rounded-lg w-full" src="assets/images/webdev/arima_1.png" alt='Arima Indonesia' />
                            </div>
                            <div className="grid-rows-2  lg:translate-y-6 translate-y-0">
                                <div className="items-center place-content-center mx-auto">
                                    <img className="rounded-lg w-full" src="assets/images/webdev/arima_2.png" alt='Arima Indonesia' />
                                </div>
                                <div className="items-center place-content-center mx-auto">
                                    <img className="rounded-lg w-full" src="assets/images/webdev/arima_3.png" alt='Arima Indonesia' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="lg:h-screen h-auto bg-gradient-to-b from-[#20201e] to-[#4b4a46]">
                    <div className="px-8 lg:py-0 py-8 md:px-auto flex flex-col items-center justify-center h-full">
                        <div className="flex grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 mx-auto">
                            <div className="items-center place-content-center mx-auto lg:-translate-y-6 translate-y-0">
                                <img className="rounded-lg w-full" src="assets/images/webdev/nusa_1.png" />
                            </div>
                            <div className="grid-rows-2">
                                <div className="items-center place-content-center mx-auto lg:translate-y-6 translate-y-0 mb-2">
                                    <img className="rounded-lg w-full" src="assets/images/webdev/nusa_3.png" />
                                </div>
                                <div className="items-center place-content-center mx-auto lg:translate-y-6 translate-y-0">
                                    <img className="rounded-lg w-full" src="assets/images/webdev/nusa_2.png" />
                                </div>
                            </div>
                            <div className="col-span-2 lg:ml-5 ml-0 place-content-center">
                                <div className="text-left font-yeseva text-white lg:text-8xl md:text-5xl text-4xl mb-2">
                                    <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">UD NUSA RAYA</span>
                                </div>
                                <div className="w-1/3 text-center font-raleway my-4 py-2 px-4 text-white lg:text-2xl text-md md:text-xl border border-white rounded-full shadow-2xl shadow-[#f46b455e]">
                                    2023
                                </div>
                                <div className="text-white w-2/3 text-2xl font-raleway mb-16">
                                    The UD NUSA RAYA website is designed as a platform that provides comprehensive information about lightweight concrete panels and bricks.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="lg:h-screen h-auto bg-gradient-radial from-[#323232] to-[#53524d]">
                    <div className="px-8 lg:py-0 py-8 md:px-auto flex flex-col items-center justify-center h-full">
                        <div className="flex grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 mx-auto">
                            <div className="col-span-2 lg:ml-5 ml-0 place-content-center">
                                <div className="text-left font-yeseva text-white lg:text-8xl md:text-5xl text-4xl mb-2">
                                    <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Shine Barrier</span>
                                </div>
                                <div className="lg:w-1/3 w-1/2 text-center font-raleway my-4 py-2 px-4 text-white lg:text-2xl text-md md:text-xl border border-white rounded-full shadow-2xl shadow-[#f46b455e]">
                                    Ongoing Project
                                </div>
                                <div className="text-white w-2/3 text-2xl font-raleway mb-16">
                                    The Shine Barrier website is designed to introduce advanced technology vehicle protection services.
                                </div>
                            </div>
                            <div className="items-center place-content-center mx-auto lg:-translate-y-6 translate-y-0">
                                <img className="rounded-lg w-full" src="assets/images/webdev/shine_1.png" alt='Arima Indonesia' />
                            </div>
                            <div className="items-center place-content-center mx-auto">
                                <img className="rounded-lg w-full" src="assets/images/webdev/shine_2.png" alt='Arima Indonesia' />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default WebDev;
