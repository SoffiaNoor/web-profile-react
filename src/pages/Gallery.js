import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
    const settings = {
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className="h-auto min-h-screen bg-[#040404] py-10 w-full content-center" id="my_gallery">
            <div className="flex flex-col items-center justify-center my-auto h-full content-center">
                <div className="text-white lg:text-4xl text-2xl font-bold text-center pt-5">
                    <span className="underline underline-offset-8 decoration-4 decoration-[#FF8B00]">My</span>
                    <span className="text-[#FF8B00]">Gallery</span>
                </div>
                <div className="sliderAx h-auto w-full py-10">
                    <Slider {...settings}>
                        <div className="px-5">
                            <img className="w-full h-[30rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                src="assets/images/gallery_1.jpeg" alt="Gallery 1" />
                        </div>
                        <div className="px-5">
                            <img className="w-full h-[30rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                src="assets/images/gallery_2.jpeg" alt="Gallery 2" />
                        </div>
                        <div className="px-5">
                            <img className="w-full h-[30rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                src="assets/images/gallery_3.jpeg" alt="Gallery 3" />
                        </div>
                        <div className="px-5">
                            <img className="w-full h-[30rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                src="assets/images/gallery_4.jpeg" alt="Gallery 4" />
                        </div>
                        <div className="px-5">
                            <img className="w-full h-[30rem] object-cover rounded-lg transition duration-200 group-hover:scale-110"
                                src="assets/images/gallery_5.jpeg" alt="Gallery 5" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
