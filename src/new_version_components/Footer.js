import React from 'react';

function Footer() {
    return (
        <section className="h-auto bg-[#53524d] backdrop-blur-lg pb-3 border-t border-white transition-all duration-500 mx-auto">
            <div className="mx-auto flex flex-col items-center justify-center py-5 h-full content-center">
                <div className="mx-auto w-full px-4 md:w-3/4 lg:w-1/2">
                    {/* Social Links */}
                    <div className="flex flex-wrap justify-center gap-5">
                        <a
                            href="https://www.instagram.com/soffia.n.a/"
                            target="_blank"
                            rel="noreferrer"
                            className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center overflow-hidden font-medium text-gray-600 bg-transparent border border-white shadow-inner group rounded-full"
                        >
                            <span className="transition-colors duration-300 delay-200 group-hover:text-white ease">
                                <i className="fab fa-instagram text-white text-xl md:text-2xl lg:text-3xl"></i>
                            </span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/soffianooraisyah/"
                            target="_blank"
                            rel="noreferrer"
                            className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center overflow-hidden font-medium text-gray-600 bg-transparent border border-white shadow-inner group rounded-full"
                        >
                            <span className="transition-colors duration-300 delay-200 group-hover:text-white ease">
                                <i className="fab fa-linkedin text-white text-xl md:text-2xl lg:text-3xl"></i>
                            </span>
                        </a>
                        <a
                            href="https://github.com/SoffiaNoor"
                            target="_blank"
                            rel="noreferrer"
                            className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center overflow-hidden font-medium text-gray-600 bg-transparent border border-white shadow-inner group rounded-full"
                        >
                            <span className="transition-colors duration-300 delay-200 group-hover:text-white ease">
                                <i className="fab fa-github text-white text-xl md:text-2xl lg:text-3xl"></i>
                            </span>
                        </a>
                    </div>
                    {/* Copyright Text */}
                    <div className="mt-5 text-center font-raleway text-sm md:text-base text-white">
                        © 2025 Soffia Noor Aisyah. All rights reserved.
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
