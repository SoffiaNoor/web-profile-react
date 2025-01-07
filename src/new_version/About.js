import React from 'react';

const About = () => {
    return (
        <>
            <section className="h-auto min-h-screen lg:h-screen bg-gradient-to-b from-[#20201e] to-[#4b4a46] py-10 lg:py-0">
                <div className="pt-10 flex flex-col items-center justify-center h-full">

                    <div className="px-4 md:px-auto lg:pt-10">
                        <div className="mx-auto md:px-4 container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:pb-5 lg:pt-0 pt-5">
                            <div className="flex flex-col items-center lg:items-start justify-center animate-slidein500 opacity-0">
                                <img className="w-2/3 lg:w-3/4 md:w-1/2 lg:-rotate-3 rotate-0 transition-all duration-300 ease-in-out hover:rotate-0 rounded-full border-2 border-white" src="/assets/images/2.jpg" alt="Soffia Noor Aisyah" />
                            </div>
                            <div className="flex flex-col items-center lg:items-start justify-center animate-slidein500 opacity-0 ">
                                <div className="lg:hover:-rotate-3 rotate-0 transition-all duration-300 ease-in-out">
                                    <div className="lg:text-left text-center font-yeseva text-white lg:text-6xl text-4xl mb-2">
                                        <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">About</span> Me
                                    </div>
                                    <div className="font-raleway text-white font-light text-lg lg:text-2xl mt-3 lg:text-left text-center">
                                        I am a fresh graduated in the Mathematics Department at the Institute of Technology Sepuluh Nopember (ITS),
                                        with a keen interest in the fields of Mathematics and Programming. My current goal is to develop my soft skills
                                        and understanding related to the practical implementation of Mathematics, such as Computer Vision and Web Development.
                                        I also have a big interest in Graphic Design.
                                    </div>
                                    <div className="flex py-10 place-content-center">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
