import React from 'react';

const AboutMe = () => {
    return (
        <section className="h-auto min-h-screen lg:h-screen bg-[#040404] py-10 lg:py-0" id="about_me">
            <div className="pt-10 flex flex-col items-center justify-center h-full">
                <div className="text-white lg:text-4xl text-2xl font-bold text-center">
                    <span className="underline underline-offset-8 decoration-4 decoration-[#FF8B00]">About</span>
                    <span className="text-[#FF8B00]"> Me</span>
                </div>
                <div className="px-4 md:px-auto lg:pt-10">
                    <div className="mx-auto md:px-4 container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:pb-5 lg:pt-0 pt-5">
                        <div className="flex flex-col items-center lg:items-start justify-center animate-slidein500 opacity-0">
                            <img className="w-2/3 lg:w-4/5 md:w-1/2" src="/assets/images/foto_soffia.png" alt="Soffia Noor Aisyah" />
                        </div>
                        <div className="flex flex-col items-center lg:items-start justify-center animate-slidein500 opacity-0">
                            <div className="text-white font-bold text-sm lg:text-xl text-center lg:text-left">
                                Hi, My Name is <span className="text-[#FF8B00]">Soffia Noor Aisyah</span>
                            </div>
                            <div className="text-white font-bold text-sm lg:text-xl mt-3 text-center lg:text-justify">
                                I am a student majoring in the <span className="text-[#FF8B00]">Mathematics Department at the Institute of Technology Sepuluh Nopember (ITS)</span>,
                                with a keen interest in the fields of Mathematics and Programming. My current goal is to develop my
                                soft skills and understanding related to the practical implementation of Mathematics, such as Computer
                                Vision and Web Development. I also have a big interest in Graphic Design.
                            </div>
                            <div className="bg-[#171717] my-4 py-4 px-4 w-full h-auto">
                                <table className="table-auto text-white mx-5 my-5 text-sm lg:text-base">
                                    <tbody>
                                        <tr>
                                            <td className="text-[#FF8B00] font-extrabold">Name</td>
                                            <td>: Soffia Noor Aisyah</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#FF8B00] font-extrabold">Email</td>
                                            <td>: soffianaisyah0@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#FF8B00] font-extrabold">Address</td>
                                            <td>: Surabaya</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#FF8B00] font-extrabold">Social Media</td>
                                            <td>
                                                <a href="https://www.instagram.com/soffia.n.a/" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-instagram text-white text-2xl md:text-3xl mx-1 my-1"></i>
                                                </a>
                                                <a href="https://www.linkedin.com/in/soffianooraisyah/" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-linkedin text-white text-2xl md:text-3xl mx-1 my-1"></i>
                                                </a>
                                                <a href="https://github.com/SoffiaNoor" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-github text-white text-2xl md:text-3xl mx-1 my-1"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <a href="/Portfolio">
                                <button className="relative h-12 md:h-16 w-64 md:w-80 overflow-hidden border border-[#FF8B00] text-[#FF8B00] text-lg lg:text-2xl tracking-widest font-light shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#FF8B00] before:duration-300 before:ease-out hover:text-white hover:shadow-[#fdbe74b8] hover:before:h-40 hover:before:w-80 hover:before:opacity-80">
                                    <span className="relative z-10">REVIEW MY PROJECT</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
