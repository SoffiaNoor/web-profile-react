import React from 'react';

const Resume = () => {
    return (
        <>
            <section className="h-auto bg-[#040404] py-10">
                <div className="pt-10 flex flex-col items-center justify-center h-full">
                    <div className="text-white text-2xl lg:text-4xl font-bold text-center">
                        <span className="underline underline-offset-8 decoration-4 decoration-[#FF8B00]">My</span>
                        <span className="text-[#FF8B00]"> Experiences</span>
                    </div>
                    <div className="w-full py-5 animate-slidein500 opacity-0">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-4 lg:p-10 h-full">
                                <div className="border-3 absolute border-opacity-100 border-[#FF8B00] h-full border"
                                    style={{ left: '50%' }}></div>
                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-10 flex items-center order-1 bg-white shadow-xl w-6 h-6 rounded-full">
                                    </div>
                                    <div className="order-1 bg-[#2C2C2C] border-4 border-[#040404] hover:border hover:border-4 hover:border-[#FF8B00] ease-out hover:scale-110 transition duration-500 shadow-xl w-5/12 px-3 lg:px-6 py-4">
                                        <h3 className="font-bold text-white text-sm lg:text-xl text-center my-0 py-0">TEEPxNTUST
                                            2024
                                            (Taiwan)</h3>
                                        <h6 className="text-[#FF8B00] font-bold text-xs lg:text-sm text-center my-0 py-0">(February
                                            2024 -
                                            June 2024)</h6>
                                        <p
                                            className="pt-2 lg:text-justify text-center text-xs lg:text-sm leading-snug font-bold tracking-wide text-white">
                                            I
                                            am
                                            studying <span className="text-[#FF8B00]">Artificial Intelligence</span>, with a
                                            particular focus on Text
                                            Mining courses and
                                            gaining practical implementation experience under the guidance of expert Mentors and
                                            highly skilled Professor.</p>
                                    </div>
                                </div>

                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-10 flex items-center order-1 bg-white shadow-xl w-6 h-6 rounded-full">
                                    </div>
                                    <div className="order-1 bg-[#2C2C2C] border-4 border-[#040404] hover:border hover:border-4 hover:border-[#FF8B00] ease-out hover:scale-110 transition duration-500 shadow-xl w-5/12 px-3 lg:px-6 py-4">
                                        <h3 className="font-bold text-white text-sm lg:text-xl text-center my-0 py-0">Graphic
                                            Designer of
                                            Custom Basketball Jersey</h3>
                                        <h6 className="text-[#FF8B00] font-bold text-xs lg:text-sm text-center my-0 py-0">(October
                                            2023 -
                                            November 2023)</h6>
                                        <p
                                            className="pt-2 lg:text-justify text-center text-xs lg:text-sm leading-snug font-bold tracking-wide text-white">
                                            I
                                            am applying my skills in <span className="text-[#FF8B00]">Graphic Design</span> using
                                            Adobe Illustrator, Figma, and
                                            CorelDRAW to design Instagram social media feeds and stories, as well as basketball
                                            jersey costumes.</p>
                                    </div>
                                </div>

                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-10 flex items-center order-1 bg-white shadow-xl w-6 h-6 rounded-full">
                                    </div>
                                    <div className="order-1 bg-[#2C2C2C] border-4 border-[#040404] hover:border hover:border-4 hover:border-[#FF8B00] ease-out hover:scale-110 transition duration-500 shadow-xl w-5/12 px-3 lg:px-6 py-4">
                                        <h3 className="font-bold text-white text-sm lg:text-xl text-center my-0 py-0">KoffieSoft
                                            Internship
                                            2023 (Surabaya)</h3>
                                        <h6 className="text-[#FF8B00] font-bold text-xs lg:text-sm text-center my-0 py-0">(July 2023
                                            -
                                            September 2023)</h6>
                                        <p
                                            className="pt-2 text-center lg:text-justify text-xs lg:text-sm leading-snug font-bold tracking-wide text-white">
                                            I
                                            am studying and applying my skills in <span className="text-[#FF8B00]">Web
                                                Development</span> using frameworks such as
                                            Laravel, CodeIgniter, and Yii2, as well as System Database management with MySQL.
                                            During this internship, I have learned to work with various frameworks.</p>
                                    </div>
                                </div>

                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-10 flex items-center order-1 bg-white shadow-xl w-6 h-6 rounded-full">
                                    </div>
                                    <div className="order-1 bg-[#2C2C2C] border-4 border-[#040404] hover:border hover:border-4 hover:border-[#FF8B00] ease-out hover:scale-110 transition duration-500 shadow-xl w-5/12 px-3 lg:px-6 py-4">
                                        <h3 className="font-bold text-white text-sm lg:text-xl text-center my-0 py-0">OMITS 16TH
                                            (ITS Surabaya)
                                        </h3>
                                        <h6 className="text-[#FF8B00] font-bold text-xs lg:text-sm text-center my-0 py-0">(July 2023
                                            - October
                                            2023)</h6>
                                        <p
                                            className="pt-2 text-center lg:text-justify text-xs lg:text-sm leading-snug font-bold tracking-wide text-white">
                                            As
                                            Steering Committee of <span className="text-[#FF8B00]">Creative Design</span>, i am
                                            responsible for overseeing the creative
                                            direction and design aspects of the event by using Adobe Illustrator.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:h-screen h-auto py-5" id="my_services" style={{ backgroundImage: `url(assets/images/services.png)`, backgroundSize: 'cover' }}>
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-white text-2xl lg:text-4xl font-bold text-center">
                        <span className="underline underline-offset-8 decoration-4 decoration-[#FF8B00]">I Provide</span>
                        <span className="text-[#FF8B00]"> this Services</span>
                    </div>
                    <div
                        className="mx-auto my-5 lg:my-10 md:px-4 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center animate-slidein500 opacity-0">
                        <div className="bg-[#040404] bg-opacity-60 bg-blend-overlay h-auto shadow-xl w-[20rem] lg:w-full ease-out hover:scale-110 transition duration-500">
                            <div className="p-3 lg:p-8">
                                <div className="text-xl lg:text-6xl my-1 lg:my-4 font-roboto text-[#FF8B00] font-bold">01
                                </div>
                                <div className="text-lg lg:text-2xl text-white font-bold">
                                    Full Stack Web Development
                                </div>
                                <hr className="w-48 h-1 lg:h-2 my-1 lg:my-4 bg-[#FF8B00] border-0 rounded" />
                                <p className="font-semibold text-sm lg:text-lg text-white">Offering complete web development, from
                                    front-end
                                    design to back-end management.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#040404] bg-opacity-60 bg-blend-overlay h-auto shadow-xl w-[20rem] lg:w-full ease-out hover:scale-110 transition duration-500">
                            <div className="p-3 lg:p-8">
                                <div className="text-xl lg:text-6xl my-1 lg:my-4 font-roboto text-[#FF8B00] font-bold">02
                                </div>
                                <div className="text-lg lg:text-2xl text-white font-bold">
                                    Graphic Design
                                </div>
                                <hr className="w-48 h-1 lg:h-2 my-1 lg:my-4 bg-[#FF8B00] border-0 rounded" />
                                <p className="font-semibold text-sm lg:text-lg text-white">Specializing in creating stunning visuals
                                    for social media, marketing materials, and more.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#040404] bg-opacity-60 bg-blend-overlay h-auto shadow-xl w-[20rem] lg:w-full ease-out hover:scale-110 transition duration-500">
                            <div className="p-3 lg:p-8">
                                <div className="text-xl lg:text-6xl my-1 lg:my-4 font-roboto text-[#FF8B00] font-bold">03
                                </div>
                                <div className="text-lg lg:text-2xl text-white font-bold">
                                    Data Scientist
                                </div>
                                <hr className="w-48 h-1 lg:h-2 my-1 lg:my-4 bg-[#FF8B00] border-0 rounded" />
                                <p className="font-semibold text-sm lg:text-lg text-white">Expert in analyzing and interpreting
                                    complex data to drive insights and decisions.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#040404] bg-opacity-60 bg-blend-overlay h-auto shadow-xl w-[20rem] lg:w-full ease-out hover:scale-110 transition duration-500">
                            <div className="p-3 lg:p-8">
                                <div className="text-xl lg:text-6xl my-1 lg:my-4 font-roboto text-[#FF8B00] font-bold">04
                                </div>
                                <div className="text-lg lg:text-2xl text-white font-bold">
                                    UI / UX Design
                                </div>
                                <hr className="w-48 h-1 lg:h-2 my-1 lg:my-4 bg-[#FF8B00] border-0 rounded" />
                                <p className="font-semibold text-sm lg:text-lg text-white">Enhancing user experiences with intuitive
                                    and engaging interface designs.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#040404] bg-opacity-60 bg-blend-overlay h-auto shadow-xl w-[20rem] lg:w-full ease-out hover:scale-110 transition duration-500">
                            <div className="p-3 lg:p-8">
                                <div className="text-xl lg:text-6xl my-1 lg:my-4 font-roboto text-[#FF8B00] font-bold">05
                                </div>
                                <div className="text-lg lg:text-2xl text-white font-bold">
                                    Mathematics Tutorial
                                </div>
                                <hr className="w-48 h-1 lg:h-2 my-1 lg:my-4 bg-[#FF8B00] border-0 rounded" />
                                <p className="font-semibold text-sm lg:text-lg text-white">Offering personalized math lessons to
                                    help you master concepts and solve problems effectively.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-screen bg-[#040404]" id="my_education">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-white lg:text-4xl text-2xl font-bold text-center pt-5">
                        <span className="underline underline-offset-8 decoration-4 decoration-[#FF8B00]">My</span>
                        <span className="text-[#FF8B00]"> Education</span>
                    </div>
                    <div className="lg:py-10 py-5 md:py-5 w-full lg:px-32 px-2 md:px-16 px-1 ease-out hover:translate-x-6 transition duration-500">
                        <div className="grid grid-cols-3 gap-0 text-white">
                            <div className="bg-[#FF8B00] h-auto py-5">
                                <div className="text-white text-xs lg:text-lg text-center font-bold tracking-widest py-1 lg:pt-5">
                                    2020 - 2024</div>
                                <div className="text-white lg:text-3xl text-xl font-bold text-center pt-5 lg:pt-4">Bachelor of
                                    Mathematics</div>
                                <div className="text-white lg:text-lg text-sm text-center italic font-bold">Undergradute with
                                    GPA: 3.59 </div>
                            </div>
                            <div className="col-span-2 h-auto" style={{ backgroundImage: 'url(assets/images/education_1.png)', backgroundSize: 'cover' }}>
                                <div className="px-10 py-5 h-auto">
                                    <div className="text-white font-bold text-sm lg:text-2xl">Institute Technology Sepuluh Nopember
                                        (ITS)</div>
                                    <div className="font-bold text-sm lg:text-2xl text-[#FF8B00] italic">Mathematics Department
                                    </div>
                                    <ul className="font-light text-sm text-white">
                                        <li>2022 - Coordinator of Digital Design OMITS 15th</li>
                                        <li>2022 - Staff of Mathematics Magazine (MATOZ)</li>
                                        <li>2023 - Steering Committee of OMITS 16th</li>
                                        <li>2022 - Now - Graphic Design Freelancer</li>
                                        <li>2022 - Now - Math Tutor</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:py-10 py-5 md:py-5 w-full lg:px-32 px-2 md:px-16 px-1 ease-out hover:-translate-x-6 transition duration-500">
                        <div className="grid grid-cols-3 gap-0 text-white">
                            <div className="col-span-2 h-auto" style={{ backgroundImage: 'url(assets/images/education_2.png)', backgroundSize: 'cover' }}>
                                <div className="px-10 py-5 h-auto">
                                    <div className="text-white font-bold text-sm lg:text-2xl">SMA Negeri 17, Surabaya, Indonesia
                                    </div>
                                    <div className="font-bold text-sm lg:text-2xl text-[#FF8B00] italic">Science and Mathematics
                                    </div>
                                    <ul className="font-light text-sm text-white">
                                        <li>2017-2019 - Staff of SMANTASS Choir (TASSCHO)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-[#FF8B00] h-auto py-5">
                                <div
                                    className="text-white text-xs lg:text-lg text-center font-bold tracking-widest pt-1 lg:pt-5 pb-1 lg:pb-0">
                                    2017 - 2020</div>
                                <div className="text-white lg:text-3xl text-xl font-bold text-center py-3 lg:pt-0">Graduated Senior
                                    High School</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:py-10 py-5 md:py-5 w-full lg:px-32 px-2 md:px-16 px-1 ease-out hover:translate-x-6 transition duration-500">
                        <div className="grid grid-cols-3 gap-0 text-white">
                            <div className="bg-[#FF8B00] h-auto py-5">
                                <div
                                    className="text-white text-xs lg:text-lg text-center font-bold tracking-widest pt-1 lg:pt-5 pb-1 lg:pb-0">
                                    2014 - 2017</div>
                                <div className="text-white lg:text-3xl text-xl font-bold text-center py-3 lg:pt-0">Graduated Junior
                                    High School</div>
                            </div>
                            <div className="col-span-2 h-auto" style={{ backgroundImage: 'url(assets/images/education_3.png)', backgroundSize: 'cover' }}>
                                <div className="px-10 py-5 h-auto">
                                    <div className="text-white font-bold text-sm lg:text-2xl">SMPN 30 Surabaya, Indonesia</div>
                                    <div className="font-bold text-sm lg:text-2xl text-[#FF8B00] italic">Science and Social Major
                                    </div>
                                    <ul className="font-light text-sm text-white">
                                        <li>2014-2017 - Staff of SMPN 30 Surabaya Choir</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Resume;
