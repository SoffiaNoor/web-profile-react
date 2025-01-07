import React from 'react';

const Hire = () => {
    return (
        <>
            <section className="h-auto min-h-screen lg:h-screen bg-gradient-radial from-[#4b4a46] to-[#20201e] py-10 lg:py-0 content-center">
                <div className="pt-10 flex flex-col items-center justify-center h-full">

                    <div className="px-4 md:px-auto lg:pt-10">
                        <div className="mx-auto md:px-4 container grid grid-cols-1 gap-8 lg:pb-5 lg:pt-0 pt-5">
                            <div className="text-center font-yeseva text-white lg:text-6xl text-4xl lg:pt-0 pt-10 mb-2">
                                Hire <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Me</span>
                            </div>
                            {/* Description Section */}
                            <div className="px-6 lg:px-20 text-center text-white">
                                <p className="font-raleway text-lg lg:text-xl">
                                    I'm a passionate and dedicated web developer with a focus on creating visually stunning and user-friendly websites. If you're looking for someone to bring your ideas to life or help you achieve your project goals, I'm here to collaborate with you!
                                </p>
                            </div>

                            {/* Call-to-Action Section */}
                            <div className="flex flex-col items-center">
                                <a href="mailto:soffianaisyah0@gmail.com" target='blank'>
                                    <button
                                        className="font-raleway relative h-12 lg:h-16 w-60 lg:w-80 md:w-72 rounded-full overflow-hidden border border-white 
                    text-white lg:text-xl md:text-2xl text-lg font-extralight shadow-2xl transition-all duration-200 before:absolute 
                    before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#f46b45] hover:-translate-y-1 hover:border-[#f46b45]
                    before:duration-300 before:ease-out hover:text-white hover:shadow-[#f46b455e] hover:before:h-40 hover:before:w-80 hover:before:opacity-80">
                                        <span className="relative z-10">Contact Me</span>
                                    </button>
                                </a>
                                <p className="font-raleway text-white mt-4 text-lg">
                                    Or reach me at: <span className="font-semibold">soffianaisyah0@gmail.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hire;
