import React from "react";

import Slider from 'react-slick';
import { BiArrowBack } from 'react-icons/bi'; // Assuming you have the react-icons package installed

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    autoplay: true,
    infinite: true,
    dots: false,
    arrows: false, // Disable default arrows
    slidesToShow: 1,
    slidesToScroll: 1,
};
// const CustomArrowPrev = ({ onClick }) => (
//     <div
//         onClick={onClick}
//         className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
//     >
//         <BiArrowBack className="text-sm md:text-lg" />
//     </div>
// );

// const CustomArrowNext = ({ onClick }) => (
//     <div
//         onClick={onClick}
//         className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
//     >
//         <BiArrowBack className="rotate-180 text-sm md:text-lg" />
//     </div>
// );
const HeroBanner = () => {
    return (
        <div className="relative text-white text-[20px] w-full max-w-[1920px] mx-auto">
            <Slider {...settings}>
                <div >
                    <img
                        src="/slide-1.png"
                        className="aspect-[16/10] md:aspect-auto object-cover w-full"
                    />
                </div>
                <div >
                    <img
                        src="/slide-2.png"
                        className="aspect-[16/10] md:aspect-auto object-cover w-full"
                    />
                </div>
                <div >
                    <img
                        src="/slide-3.png"
                        className="aspect-[16/10] md:aspect-auto object-cover w-full"
                    />
                </div>
            </Slider>
            {/* <CustomArrowPrev />
            <CustomArrowNext /> */}
        </div>
    );
};

export default HeroBanner;
