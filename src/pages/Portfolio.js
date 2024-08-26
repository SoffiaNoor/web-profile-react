import React, { useState } from 'react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilter = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <section className="h-auto min-h-screen bg-[#040404] py-10">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="pt-10 text-white text-2xl lg:text-4xl font-bold text-center">
                    <span className="underline underline-offset-8 decoration-4 decoration-[#FF8B00]">My</span>
                    <span className="text-[#FF8B00]"> Portfolio</span>
                </div>
                <div className="px-1 lg:px-10 mx-2 lg:mx-10">
                    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                        <button
                            type="button"
                            onClick={() => handleFilter('all')}
                            className={`filter-btn ${activeFilter === 'all' ? 'bg-stone-950 text-[#FF8B00]' : 'text-[#2C2C2C]'} hover:text-[#FF8B00] border border-2 border-[#FF8B00] bg-[#FF8B00] hover:bg-[#1B1B1B] rounded-full text-xl lg:text-3xl font-extrabold px-3 py-2 hover:shadow-xl text-center me-3 mb-3`}
                        >
                            <i class="fa fa-list-alt" aria-hidden="true"></i>
                        </button>
                        <button
                            type="button"
                            onClick={() => handleFilter('website')}
                            className={`filter-btn ${activeFilter === 'website' ? 'bg-stone-950 text-[#FF8B00]' : 'text-[#2C2C2C]'} hover:text-[#FF8B00] border border-2 border-[#FF8B00] bg-[#FF8B00] hover:bg-[#1B1B1B] rounded-full text-xl lg:text-3xl font-medium px-2 py-2 hover:shadow-xl text-center me-3 mb-3`}
                        >
                            <i className="fa fa-laptop" aria-hidden="true"></i>
                        </button>
                        <button
                            type="button"
                            onClick={() => handleFilter('design')}
                            className={`filter-btn ${activeFilter === 'design' ? 'bg-stone-950 text-[#FF8B00]' : 'text-[#2C2C2C]'} hover:text-[#FF8B00] border border-2 border-[#FF8B00] bg-[#FF8B00] hover:bg-[#1B1B1B] rounded-full text-xl lg:text-3xl font-medium px-3 py-2 hover:shadow-xl text-center me-3 mb-3`}
                        >
                            <i className="fas fa-image" aria-hidden="true"></i>
                        </button>
                        <button
                            type="button"
                            onClick={() => handleFilter('mathematics')}
                            className={`filter-btn ${activeFilter === 'mathematics' ? 'bg-stone-950 text-[#FF8B00]' : 'text-[#2C2C2C]'} hover:text-[#FF8B00] border border-2 border-[#FF8B00] bg-[#FF8B00] hover:bg-[#1B1B1B] rounded-full text-xl lg:text-3xl font-medium px-2.5 py-2 hover:shadow-xl text-center me-3 mb-3`}
                        >
                            <i className="fas fa-book-open"></i>
                        </button>
                    </div>

                    <div id="portfolio" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Only show items that match the activeFilter */}
                        {activeFilter === 'all' || activeFilter === 'website' ? (
                            <>
                                <div className="group relative flex items-end overflow-hidden rounded-lg website">
                                    <img
                                        className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                        src="assets/images/portfolio_1.png"
                                        alt=""
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                                    <div className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">
                                            UD NUSA RAYA Website
                                            <br />
                                            <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                            <p className="text-lg m-0 p-0">1017studios Website</p>
                                            <div className="mx-auto text-center my-2 py-2">
                                                <a href="https://panellantaibataringan.id/" target="_blank" rel="noreferrer">
                                                    <button className="relative h-10 lg:h-14 w-60 lg:w-72 md:w-64 overflow-hidden border border-[#1B1B1B] text-[#1B1B1B] lg:text-xl md:text-xl text-lg tracking-widest font-bold shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#1B1B1B] before:duration-300 before:ease-out hover:text-white hover:shadow-[#fdbe74b8] hover:before:h-40 hover:before:w-80 hover:before:opacity-100">
                                                        <span className="relative z-10">VISIT PAGE</span>
                                                    </button>
                                                </a>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="group relative flex items-end overflow-hidden rounded-lg website">
                                    <img
                                        className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                        src="assets/images/portfolio_2.png"
                                        alt=""
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                                    <div className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">
                                            Arima Indonesia
                                            <br />
                                            <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                            <p className="text-lg m-0 p-0">1017studios Website</p>
                                            <div className="mx-auto text-center my-2 py-2">
                                                <a href="https://arimaindonesia.com/" target="_blank" rel="noopener noreferrer">
                                                    <button className="relative h-10 lg:h-14 w-60 lg:w-72 md:w-64 overflow-hidden border border-[#1B1B1B] text-[#1B1B1B] lg:text-xl md:text-xl text-lg tracking-widest font-bold shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#1B1B1B] before:duration-300 before:ease-out hover:text-white hover:shadow-[#fdbe74b8] hover:before:h-40 hover:before:w-80 hover:before:opacity-100">
                                                        <span className="relative z-10">VISIT PAGE</span>
                                                    </button>
                                                </a>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="group relative flex items-end overflow-hidden rounded-lg website">
                                    <img className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                        src="assets/images/portfolio_3.png" alt="" />
                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">Java
                                            Residence<br />
                                            <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                            <p className="text-lg m-0 p-0">1017studios Website</p>
                                            <div className="mx-auto text-center my-2 py-2">
                                                <a href="https://javaresidence.com/" target="_blank" rel="noreferrer">
                                                    <button
                                                        className="relative h-10 lg:h-14 w-60 lg:w-72 md:w-64 overflow-hidden border border-[#1B1B1B] text-[#1B1B1B] lg:text-xl md:text-xl text-lg tracking-widest font-bold shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#1B1B1B] before:duration-300 before:ease-out hover:text-white hover:shadow-[#fdbe74b8] hover:before:h-40 hover:before:w-80 hover:before:opacity-100">
                                                        <span className="relative z-10">VISIT PAGE</span>
                                                    </button>
                                                </a>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="group relative flex items-end overflow-hidden rounded-lg website">
                                    <img className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                        src="assets/images/portfolio_5.png" alt="" />
                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">1017studios<br />
                                            <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                            <p className="text-lg m-0 p-0">1017studios Website</p>
                                            <div className="mx-auto text-center my-2 py-2">
                                                <a href="https://1017studios.com/" target="_blank" rel="noreferrer">
                                                    <button
                                                        className="relative h-10 lg:h-14 w-60 lg:w-72 md:w-64 overflow-hidden border border-[#1B1B1B] text-[#1B1B1B] lg:text-xl md:text-xl text-lg tracking-widest font-bold shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#1B1B1B] before:duration-300 before:ease-out hover:text-white hover:shadow-[#fdbe74b8] hover:before:h-40 hover:before:w-80 hover:before:opacity-100">
                                                        <span className="relative z-10">VISIT PAGE</span>
                                                    </button>
                                                </a>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="group relative flex items-end overflow-hidden rounded-lg website">
                                    <img className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                        src="assets/images/portfolio_6.png" alt="" />
                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">Web Development
                                            Team
                                            Project<br />
                                            <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                            <p className="text-lg m-0 p-0">Raja Ampat</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="group relative flex items-end overflow-hidden rounded-lg website">
                                    <img className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                        src="assets/images/portfolio_4.png" alt="" />
                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">Web Development
                                            Team
                                            Project<br />
                                            <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                            <p className="text-lg m-0 p-0">Courses Website</p>
                                        </span>
                                    </div>
                                </div>

                                {/* Repeat for other "website" items */}
                            </>
                        ) : null}

                        {activeFilter === 'all' || activeFilter === 'design' ? (
                            <>
                                <div className="group relative flex items-end overflow-hidden rounded-lg design">
                                    <a href="assets/images/design_1.png">
                                        <img className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                            src="assets/images/design_1.png" alt="" />
                                        <div
                                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                        </div>
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">AGPSTUFF
                                                Jersey<br />
                                                <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                                <p className="text-lg m-0 p-0">Jersey Design</p>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="group relative flex items-end overflow-hidden rounded-lg design">
                                    <a href="assets/images/design_2.png">
                                        <img className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                            src="assets/images/design_2.png" alt="" />
                                        <div
                                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                        </div>
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">AGPSTUFF
                                                Jersey<br />
                                                <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                                <p className="text-lg m-0 p-0">Feeds Design</p>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="group relative flex items-end overflow-hidden rounded-lg design">
                                    <a href="assets/images/design_3.png">
                                        <img className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                            src="assets/images/design_3.png" alt="" />
                                        <div
                                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                        </div>
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">AGPSTUFF
                                                Jersey<br />
                                                <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                                <p className="text-lg m-0 p-0">Feeds Design</p>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="group relative flex items-end overflow-hidden rounded-lg design">
                                    <a href="assets/images/design_8.png">
                                        <img className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                            src="assets/images/design_8.png" alt="" />
                                        <div
                                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                        </div>
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">XTENION
                                                SMABOY Event<br />
                                                <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                                <p className="text-lg m-0 p-0">Cup Packaging</p>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="group relative flex items-end overflow-hidden rounded-lg design">
                                    <a href="assets/images/design_10.png">
                                        <img className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                            src="assets/images/design_10.png" alt="" />
                                        <div
                                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                        </div>
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">XTENION
                                                SMABOY Event<br />
                                                <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                                <p className="text-lg m-0 p-0">Stand Design</p>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="group relative flex items-end overflow-hidden rounded-lg design">
                                    <a href="assets/images/design_11.png">
                                        <img className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                            src="assets/images/design_11.png" alt="" />
                                        <div
                                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                        </div>
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">XTENION
                                                SMABOY Event<br />
                                                <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                                <p className="text-lg m-0 p-0">Menu Design</p>
                                            </span>
                                        </div>
                                    </a>
                                </div>

                                {/* Repeat for other "design" items */}
                            </>
                        ) : null}

                        {activeFilter === 'all' || activeFilter === 'mathematics' ? (
                            <>
                                <div className="group relative flex items-end overflow-hidden rounded-lg mathematics">
                                    <a href="assets/images/tutor_1.png">
                                        <img className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                            src="assets/images/tutor_1.png" alt="" />
                                        <div
                                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                        </div>
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">Mathematics Tutorial<br />
                                                <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                                <p className="text-lg m-0 p-0">Senior High School Tutorial</p>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="group relative flex items-end overflow-hidden rounded-lg mathematics">
                                    <a href="assets/images/tutor_2.png">
                                        <img className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                            src="assets/images/tutor_2.png" alt="" />
                                        <div
                                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                        </div>
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">Mathematics Tutorial<br />
                                                <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                                <p className="text-lg m-0 p-0">Senior High School Tutorial</p>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="group relative flex items-end overflow-hidden rounded-lg mathematics">
                                    <a href="assets/images/tutor_3.png">
                                        <img className="inset-0 h-[20rem] w-[35rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                            src="assets/images/tutor_3.png" alt="" />
                                        <div
                                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                        </div>
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-[#FF8B00] bg-opacity-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            <span className="text-[#1B1B1B] text-4xl text-center font-extrabold font-roboto">Mathematics Tutorial<br />
                                                <hr className="w-48 h-1 lg:h-2 my-1 lg:mt-2 bg-[#1B1B1B] border-0 rounded mx-auto" />
                                                <p className="text-lg m-0 p-0">Senior High School Tutorial</p>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
