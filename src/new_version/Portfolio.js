import React, { useState, useEffect } from 'react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('website');

    const handleFilter = (filter) => {
        setActiveFilter(filter);
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

    const translateYValue = scrollPosition > 50 ? 'translateX(-20vh) rotate(-6deg)' : 'translateX(0) rotate(-6deg)';

    return (
        <>
            <section className="lg:block hidden h-auto bg-gradient-to-b from-[#4b4a46] to-[#20201e] pt-12 pb-32">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex grid grid-cols-1 gap-24 lg:grid-cols-2 lg:px-32 px-5 pt-10">
                        <div className="flex grid grid-cols-1 lg:grid-cols-2 px-5 lg:-ml-64 ml-0 transition-all duration-500 delay-300 ease-in-out block" style={{ transform: translateYValue }}>
                            {activeFilter === 'all' || activeFilter === 'website' ? (
                                <>
                                    <img className="website inset-0 h-[20rem] w-[35rem] object-cover rounded-lg "
                                        src="assets/images/portfolio_4.png" alt="" />
                                    <img className="website mx-10 my-10 inset-0 h-[20rem] w-[35rem] translate-y-24 object-cover rounded-lg "
                                        src="assets/images/portfolio_5.png" alt="" />
                                    <img className="website inset-0 h-[20rem] w-[35rem] object-cover rounded-lg "
                                        src="assets/images/portfolio_6.png" alt="" />
                                    <img className="website mx-10 inset-0 h-[20rem] w-[35rem] translate-y-24 object-cover rounded-lg "
                                        src="assets/images/portfolio_7.png" alt="" />
                                </>
                            ) : null}
                            {activeFilter === 'all' || activeFilter === 'design' ? (
                                <>
                                    <img className="design inset-0 h-[20rem] w-[35rem] object-cover rounded-lg "
                                        src="assets/images/design_1.png" alt="" />
                                    <img className="design mx-10 my-5 inset-0 h-[20rem] w-[35rem] translate-y-24 object-cover rounded-lg"
                                        src="assets/images/design_2.png" alt="" />
                                    <img className="design inset-0 h-[20rem] w-[35rem] object-cover rounded-lg "
                                        src="assets/images/design_3.png" alt="" />
                                    <img className="design mx-10 my-5 inset-0 h-[20rem] w-[35rem] translate-y-24 object-cover rounded-lg "
                                        src="assets/images/design_8.png" alt="" />
                                    <img className="design inset-0 h-[20rem] w-[35rem] object-cover rounded-lg "
                                        src="assets/images/design_11.png" alt="" />
                                    <img className="design mx-10 my-5 inset-0 h-[20rem] w-[35rem] translate-y-24 object-cover rounded-lg "
                                        src="assets/images/design_10.png" alt="" />
                                </>
                            ) : null}
                            {activeFilter === 'all' || activeFilter === 'mathematics' ? (
                                <>
                                    <img className="mathematics inset-0 h-[20rem] w-[35rem] object-cover rounded-lg "
                                        src="assets/images/tutor_1.png" alt="" />
                                    <img className="mathematics mx-10 my-10 inset-0 h-[20rem] w-[35rem] translate-y-24 object-cover rounded-lg "
                                        src="assets/images/tutor_2.png" alt="" />
                                    <img className="mathematics inset-0 h-[20rem] w-[35rem] object-cover rounded-lg "
                                        src="assets/images/tutor_3.png" alt="" />
                                </>
                            ) : null}
                        </div>
                        <div className="content-center">
                            <div className="flex items-center justify-end py-4 md:py-8 flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => handleFilter('website')}
                                    className={`filter-btn ${activeFilter === 'website' ? 'bg-gradient-radial from-[#ea891d] to-[#ffe4c6] text-white' : 'text-white'} hover:text-white border border-2 border-white bg-transparent hover:bg-gradient-radial hover:from-[#ea891d] hover:to-[#ffe4c6] rounded-full text-xl lg:text-3xl font-extrabold hover:shadow-xl text-center me-3 mb-3`}
                                >
                                    <i className="fa fa-laptop m-3" aria-hidden="true"></i>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleFilter('design')}
                                    className={`filter-btn ${activeFilter === 'design' ? 'bg-gradient-radial from-[#ea891d] to-[#ffe4c6] text-white' : 'text-white'} hover:text-white border border-2 border-white bg-transparent hover:bg-gradient-radial hover:from-[#ea891d] hover:to-[#ffe4c6] rounded-full text-xl lg:text-3xl font-extrabold hover:shadow-xl text-center me-3 mb-3`}
                                >
                                    <i className="fas fa-image m-3" aria-hidden="true"></i>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleFilter('mathematics')}
                                    className={`filter-btn ${activeFilter === 'mathematics' ? 'bg-gradient-radial from-[#ea891d] to-[#ffe4c6] text-white' : 'text-white'} hover:text-white border border-2 border-white bg-transparent hover:bg-gradient-radial hover:from-[#ea891d] hover:to-[#ffe4c6] rounded-full text-xl lg:text-3xl font-extrabold hover:shadow-xl text-center mb-3`}
                                >
                                    <i className="fas fa-book-open m-3"></i>
                                </button>
                            </div>
                            {activeFilter === 'all' || activeFilter === 'website' ? (
                                <>
                                    <div>
                                        <div className="text-right font-yeseva text-white lg:text-6xl text-4xl lg:pt-24 pt-10 mb-2">
                                            Website Development <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Project</span>
                                        </div>
                                        <div className="font-raleway py-5 text-lg text-white text-right">
                                            During my college years, I explored various aspects of web development.
                                            From coding independently without any framework assistance to utilizing different types of databases such as MySQL, SQL Server, and NoSQL.
                                            I worked on several projects, including a mini e-commerce platform, a tutoring system, and a tourism information platform.</div>
                                    </div>
                                </>
                            ) : null}
                            {activeFilter === 'all' || activeFilter === 'design' ? (
                                <>
                                    <div>
                                        <div className="text-right font-yeseva text-white lg:text-6xl text-4xl lg:pt-24 pt-10 mb-2">
                                            Graphic Design <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Project</span>
                                        </div>
                                        <div className="font-raleway py-5 text-lg text-white text-right">
                                            The Graphic Design portfolio highlights my creative journey.
                                            With Adobe Illustrator and Figma as my trusted tools,
                                            I specialize in creating visually compelling designs,
                                            ranging from branding and illustrations to interactive UI prototypes.</div>
                                    </div>
                                </>
                            ) : null}
                            {activeFilter === 'all' || activeFilter === 'mathematics' ? (
                                <>
                                    <div>
                                        <div className="text-right font-yeseva text-white lg:text-6xl text-4xl lg:pt-24 pt-10 mb-2">
                                            Mathematics <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Tutorial</span>
                                        </div>
                                        <div className="font-raleway py-5 text-lg text-white text-right">
                                            During my college years, I offered mathematics tutoring services for middle school and high school students.
                                            I taught lessons and solved problems through online classes conducted via Zoom Meeting.</div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:hidden block h-auto bg-gradient-to-b from-[#4b4a46] to-[#20201e] pt-12 pb-32">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex grid grid-cols-1 gap-24 lg:grid-cols-2 lg:px-32 px-5 pt-10">
                        {/* Mobile Version */}
                        <div className="lg:hidden block flex grid grid-cols-1 lg:grid-cols-2 px-5 lg:-ml-64 transition-all duration-500 delay-300 ease-in-out">
                            {activeFilter === 'all' || activeFilter === 'website' ? (
                                <>
                                    <img className="website inset-0 h-[10rem] w-[35rem] object-cover rounded-lg my-2"
                                        src="assets/images/portfolio_4.png" alt="" />
                                    <img className="website inset-0 h-[10rem] w-[35rem] object-cover rounded-lg my-2"
                                        src="assets/images/portfolio_5.png" alt="" />
                                    <img className="website inset-0 h-[10rem] w-[35rem] object-cover rounded-lg my-2"
                                        src="assets/images/portfolio_6.png" alt="" />
                                    <img className="website inset-0 h-[10rem] w-[35rem] object-cover rounded-lg my-2"
                                        src="assets/images/portfolio_7.png" alt="" />
                                </>
                            ) : null}
                            {activeFilter === 'all' || activeFilter === 'design' ? (
                                <>
                                    <img className="design inset-0 h-[10rem] w-[35rem] object-cover rounded-lg my-2"
                                        src="assets/images/design_1.png" alt="" />
                                    <img className="design inset-0 h-[10rem] w-[35rem] object-cover rounded-lg my-2"
                                        src="assets/images/design_2.png" alt="" />
                                    <img className="design inset-0 h-[10rem] w-[35rem] object-cover rounded-lg my-2"
                                        src="assets/images/design_3.png" alt="" />
                                    <img className="design inset-0 h-[10rem] w-[35rem] object-cover rounded-lg my-2"
                                        src="assets/images/design_8.png" alt="" />
                                    <img className="design inset-0 h-[10rem] w-[35rem] object-cover rounded-lg my-2"
                                        src="assets/images/design_11.png" alt="" />
                                    <img className="design inset-0 h-[10rem] w-[35rem] object-cover rounded-lg my-2"
                                        src="assets/images/design_10.png" alt="" />
                                </>
                            ) : null}
                            {activeFilter === 'all' || activeFilter === 'mathematics' ? (
                                <>
                                    <img className="mathematics inset-0 h-[10rem] w-[35rem] object-cover rounded-lg my-2"
                                        src="assets/images/tutor_1.png" alt="" />
                                    <img className="mathematics inset-0 h-[10rem] w-[35rem] object-cover rounded-lg my-2"
                                        src="assets/images/tutor_2.png" alt="" />
                                    <img className="mathematics inset-0 h-[10rem] w-[35rem] object-cover rounded-lg my-2"
                                        src="assets/images/tutor_3.png" alt="" />
                                </>
                            ) : null}
                        </div>
                        {/* End */}
                        <div className="content-center">
                            <div className="flex items-center lg:justify-end justify-center py-4 md:py-8 flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => handleFilter('website')}
                                    className={`filter-btn ${activeFilter === 'website' ? 'bg-gradient-radial from-[#ea891d] to-[#ffe4c6] text-white' : 'text-white'} hover:text-white border border-2 border-white bg-transparent hover:bg-gradient-radial hover:from-[#ea891d] hover:to-[#ffe4c6] rounded-full text-xl lg:text-3xl font-extrabold hover:shadow-xl text-center me-3 mb-3`}
                                >
                                    <i className="fa fa-laptop m-3" aria-hidden="true"></i>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleFilter('design')}
                                    className={`filter-btn ${activeFilter === 'design' ? 'bg-gradient-radial from-[#ea891d] to-[#ffe4c6] text-white' : 'text-white'} hover:text-white border border-2 border-white bg-transparent hover:bg-gradient-radial hover:from-[#ea891d] hover:to-[#ffe4c6] rounded-full text-xl lg:text-3xl font-extrabold hover:shadow-xl text-center me-3 mb-3`}
                                >
                                    <i className="fas fa-image m-3" aria-hidden="true"></i>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleFilter('mathematics')}
                                    className={`filter-btn ${activeFilter === 'mathematics' ? 'bg-gradient-radial from-[#ea891d] to-[#ffe4c6] text-white' : 'text-white'} hover:text-white border border-2 border-white bg-transparent hover:bg-gradient-radial hover:from-[#ea891d] hover:to-[#ffe4c6] rounded-full text-xl lg:text-3xl font-extrabold hover:shadow-xl text-center mb-3`}
                                >
                                    <i className="fas fa-book-open m-3"></i>
                                </button>
                            </div>
                            {activeFilter === 'all' || activeFilter === 'website' ? (
                                <>
                                    <div>
                                        <div className="lg:text-right text-center font-yeseva text-white lg:text-6xl text-4xl lg:pt-24 pt-10 mb-2">
                                            Website Development <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Project</span>
                                        </div>
                                        <div className="font-raleway py-5 text-lg text-white lg:text-right text-center">
                                            During my college years, I explored various aspects of web development.
                                            From coding independently without any framework assistance to utilizing different types of databases such as MySQL, SQL Server, and NoSQL.
                                            I worked on several projects, including a mini e-commerce platform, a tutoring system, and a tourism information platform.</div>
                                    </div>
                                </>
                            ) : null}
                            {activeFilter === 'all' || activeFilter === 'design' ? (
                                <>
                                    <div>
                                        <div className="lg:text-right text-center font-yeseva text-white lg:text-6xl text-4xl lg:pt-24 pt-10 mb-2">
                                            Graphic Design <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Project</span>
                                        </div>
                                        <div className="font-raleway py-5 text-lg text-white lg:text-right text-center">
                                            The Graphic Design portfolio highlights my creative journey.
                                            With Adobe Illustrator and Figma as my trusted tools,
                                            I specialize in creating visually compelling designs,
                                            ranging from branding and illustrations to interactive UI prototypes.</div>
                                    </div>
                                </>
                            ) : null}
                            {activeFilter === 'all' || activeFilter === 'mathematics' ? (
                                <>
                                    <div>
                                        <div className="lg:text-right text-center font-yeseva text-white lg:text-6xl text-4xl lg:pt-24 pt-10 mb-2">
                                            Mathematics <span className="bg-gradient-radial from-[#ea891d] to-[#ffe4c6] bg-clip-text text-transparent">Tutorial</span>
                                        </div>
                                        <div className="font-raleway py-5 text-lg text-white lg:text-right text-center">
                                            During my college years, I offered mathematics tutoring services for middle school and high school students.
                                            I taught lessons and solved problems through online classes conducted via Zoom Meeting.</div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
