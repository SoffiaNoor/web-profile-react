import React from 'react';

const MySkills = () => {
    return (
        <>
            <section className="xl:h-auto min-h-screen lg:h-screen lg:h-screen min-h-screen bg-gradient-to-b from-[#4b4a46] to-[#20201e] py-10 lg:pt-24" id="my_skills">
                <div className="pt-10 pb-10 flex flex-col items-center justify-center h-full">
                    <div className="text-left font-yeseva text-white lg:text-6xl text-4xl lg:pt-0 pt-10 mb-2">
                        My <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Skills</span>
                    </div>
                    <div className="font-raleway text-white text-sm lg:text-xl text-center pt-2 pb-5 animate-slidein500 opacity-0">
                        I Work Hard to Improve My Skills Regularly
                    </div>
                    <div className="border border-[#ffe4c6] border-2 md:w-4/5 w-[20rem] lg:w-2/3 p-1 lg:p-5 animate-slidein500 opacity-0">
                        <div className="mx-auto lg:px-4 container grid grid-cols-1 lg:grid-cols-2 gap-8 pb-1 lg:pb-5">
                            {/* Skill Progress Bar */}
                            <div className="m-1 lg:m-5">
                                <div className="flex justify-between">
                                    <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">HTML</span>
                                </div>
                                <div className="w-full bg-[#4b4a46] h-2.5 ">
                                    <div className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] h-2.5" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                            <div className="m-1 lg:m-5">
                                <div className="flex justify-between">
                                    <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">Adobe Illustrator</span>
                                </div>
                                <div className="w-full bg-[#4b4a46] h-2.5 ">
                                    <div className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] h-2.5" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className="m-1 lg:m-5">
                                <div className="flex justify-between">
                                    <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">CSS</span>
                                </div>
                                <div className="w-full bg-[#4b4a46] h-2.5 ">
                                    <div className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] h-2.5" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                            <div className="m-1 lg:m-5">
                                <div className="flex justify-between">
                                    <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">Figma</span>
                                </div>
                                <div className="w-full bg-[#4b4a46] h-2.5 ">
                                    <div className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] h-2.5" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className="m-1 lg:m-5">
                                <div className="flex justify-between">
                                    <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">Javascript</span>
                                </div>
                                <div className="w-full bg-[#4b4a46] h-2.5 ">
                                    <div className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] h-2.5" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className="m-1 lg:m-5">
                                <div className="flex justify-between">
                                    <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">Python</span>
                                </div>
                                <div className="w-full bg-[#4b4a46] h-2.5 ">
                                    <div className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] h-2.5" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className="m-1 lg:m-5">
                                <div className="flex justify-between">
                                    <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">PHP</span>
                                </div>
                                <div className="w-full bg-[#4b4a46] h-2.5 ">
                                    <div className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] h-2.5" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className="m-1 lg:m-5">
                                <div className="flex justify-between">
                                    <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">Artificial Intelligence</span>
                                </div>
                                <div className="w-full bg-[#4b4a46] h-2.5 ">
                                    <div className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] h-2.5" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                            <div className="m-1 lg:m-5">
                                <div className="flex justify-between">
                                    <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">React</span>
                                </div>
                                <div className="w-full bg-[#4b4a46] h-2.5 ">
                                    <div className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] h-2.5" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className="m-1 lg:m-5">
                                <div className="flex justify-between">
                                    <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">App Developer</span>
                                </div>
                                <div className="w-full bg-[#4b4a46] h-2.5 ">
                                    <div className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] h-2.5" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MySkills;
