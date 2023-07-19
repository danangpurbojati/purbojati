import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { workSlides } from '../data/project';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import {
    BsArrowRight
} from "react-icons/bs";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const WorkSlider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={10}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="h-[280px] sm:h-[480px]"
            >
                {
                    workSlides.slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="
                                    grid
                                    grid-cols-2
                                    grid-rows-2
                                    gap-4
                                    cursor-pointer
                                "
                            >
                                {
                                    slide.images.map((image, idx) => (
                                        <a 
                                            key={idx}
                                            href={
                                                image.url === 'unpublished'
                                                    ? '#'
                                                    : image.url
                                            }
                                            target={
                                                image.url === 'unpublished'
                                                    ? '_self'
                                                    : '_blank'
                                            }
                                            className="
                                                relative
                                                rounded-lg
                                                overflow-hidden
                                                flex
                                                items-center
                                                justify-center
                                                group
                                            "
                                            inline-block
                                        >
                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    relative
                                                    overflow-hidden
                                                    group
                                                "
                                            >
                                                <Image 
                                                    src={image.path}
                                                    width={500}
                                                    height={300}
                                                    alt={image.path}
                                                />
                                                <div
                                                    className="
                                                        absolute
                                                        inset-0
                                                        bg-gradient-to-l
                                                        from-transparent
                                                        via-[#e838cc]
                                                        to-[#4a22bd]
                                                        opacity-0
                                                        group-hover:opacity-80
                                                        transition-all
                                                        duration-700
                                                    "
                                                >
                                                    <div
                                                        className="
                                                            absolute
                                                            bottom-0
                                                            right-[50%]
                                                            translate-x-1/2
                                                            translate-y-full
                                                            group-hover:-translate-y-10
                                                            group-hover:xl:-translate-y-20
                                                            transition-all
                                                            duration-300
                                                            mx-auto
                                                        "
                                                    >
                                                        <div
                                                            className="
                                                                flex
                                                                items-center
                                                                gap-x-2
                                                                text-[13px]
                                                                tracking-[0.2em]
                                                            "
                                                        >
                                                            <div
                                                                className="
                                                                    translate-y-[500%]
                                                                    group-hover:translate-y-0
                                                                    transition-all
                                                                    duration-300
                                                                    delay-150
                                                                "
                                                            >
                                                                {image.title}
                                                                {' '}
                                                                {image.url === 'unpublished' && '(unpublished)'}
                                                            </div>
                                                            <div
                                                                className="
                                                                    text-xl
                                                                    translate-y-[500%]
                                                                    group-hover:translate-y-0
                                                                    transition-all
                                                                    duration-300
                                                                    delay-200
                                                                "
                                                            >
                                                                <BsArrowRight />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    ))
                                }
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default WorkSlider;