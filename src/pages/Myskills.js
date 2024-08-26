import React from 'react';

const MySkills = () => {
    return (
        <section className="h-auto min-h-screen lg:h-screen bg-[#040404] py-10 lg:py-0" id="my_skills">
            <div className="pt-10 flex flex-col items-center justify-center h-full">
                <div className="text-white text-2xl lg:text-4xl font-bold text-center">
                    <span className="underline underline-offset-8 decoration-4 decoration-[#FF8B00]">My</span>
                    <span className="text-[#FF8B00]"> Skills</span>
                </div>
                <div className="text-white text-sm lg:text-xl font-bold text-center py-5 animate-slidein500 opacity-0">
                    I Work Hard to Improve My Skills Regularly
                </div>
                <div className="border border-[#FF8B00] border-2 md:w-4/5 w-[20rem] lg:w-2/3 p-1 lg:p-5 animate-slidein500 opacity-0">
                    <div className="mx-auto lg:px-4 container grid grid-cols-1 lg:grid-cols-2 gap-8 pb-1 lg:pb-5">
                        {/* Skill Progress Bar */}
                        <div className="m-1 lg:m-5">
                            <div className="flex justify-between">
                                <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">HTML</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
                                <div className="bg-[#FF8B00] h-2.5" style={{ width: '95%' }}></div>
                            </div>
                        </div>
                        <div className="m-1 lg:m-5">
                            <div className="flex justify-between">
                                <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">Adobe Illustrator</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
                                <div className="bg-[#FF8B00] h-2.5" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="m-1 lg:m-5">
                            <div className="flex justify-between">
                                <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">CSS</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
                                <div className="bg-[#FF8B00] h-2.5" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="m-1 lg:m-5">
                            <div className="flex justify-between">
                                <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">Figma</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
                                <div className="bg-[#FF8B00] h-2.5" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className="m-1 lg:m-5">
                            <div className="flex justify-between">
                                <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">Javascript</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
                                <div className="bg-[#FF8B00] h-2.5" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className="m-1 lg:m-5">
                            <div className="flex justify-between">
                                <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">Python</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
                                <div className="bg-[#FF8B00] h-2.5" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className="m-1 lg:m-5">
                            <div className="flex justify-between">
                                <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">PHP</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
                                <div className="bg-[#FF8B00] h-2.5" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className="m-1 lg:m-5">
                            <div className="flex justify-between">
                                <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">Artificial Intelligence</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
                                <div className="bg-[#FF8B00] h-2.5" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                        <div className="m-1 lg:m-5">
                            <div className="flex justify-between">
                                <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">React</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
                                <div className="bg-[#FF8B00] h-2.5" style={{ width: '40%' }}></div>
                            </div>
                        </div>
                        <div className="m-1 lg:m-5">
                            <div className="flex justify-between">
                                <span className="font-extrabold text-sm lg:text-xl text-white text-left mb-1 lg:mb-2">App Developer</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
                                <div className="bg-[#FF8B00] h-2.5" style={{ width: '30%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MySkills;
