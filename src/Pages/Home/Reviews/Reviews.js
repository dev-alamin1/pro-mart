import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import './review.css';

// import required modules
import { EffectCoverflow } from "swiper";

const Reviews = () => {
    return (
        <>
        <h1 className="mt-5 text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}

        // autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        //   }}
        
        modules={[EffectCoverflow]}
        className="mySwiper"
      >

        <SwiperSlide>
	
    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
            </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
            <p className="text-sm uppercase">Aliquam illum</p>
        </div>
    </div>
    
    </SwiperSlide>

    <SwiperSlide>
	
    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
            </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16  mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700" />
            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
            <p className="text-sm uppercase">Aliquam illum</p>
        </div>
    </div>
    
    </SwiperSlide>

    <SwiperSlide>
	
    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
            </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16  mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700" />
            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
            <p className="text-sm uppercase">Aliquam illum</p>
        </div>
    </div>
    
    </SwiperSlide>

    <SwiperSlide>
	
    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
            </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16  mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700" />
            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
            <p className="text-sm uppercase">Aliquam illum</p>
        </div>
    </div>
    
    </SwiperSlide>

      </Swiper>
      </>
    );
};

export default Reviews;