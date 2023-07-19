"use client";
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../helpers/animationVariants';
import { aboutData } from '../data/aboutData';
import { generateSkillIcon } from '../helpers/generateSkillIcon.tsx';

const AboutPage = () => {
    const [index, setIndex] = useState(0);
    const selectedData = useMemo(() => {
        return aboutData[index];
    }, [index]);

    return (
        <div
            className="
                h-full
                py-36
                text-center
                xl:text-left
            "
        >
            <div
                className="
                    container
                    mx-auto
                    h-full
                    flex
                    flex-col
                    items-center
                    xl:flex-row
                    gap-x-6
                "
            >
                <div
                    className="
                        flex-1
                        flex
                        flex-col
                        justify-center
                    "
                >
                    <motion.h2
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="
                            h2
                        "
                    >
                        About <span className="text-accent">Me</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="
                            max-w-[500px]
                            mx-auto
                            xl:mx-0
                            mb-6
                            xl:mb-12
                            px-2
                            xl:px-0
                            text-md
                        "
                    >
                        <span
                            className="
                                hidden
                                xl:inline-block
                            "
                        >
                            Started learning frontend web development <strong className="font-extrabold">3 years ago</strong>, focusing in <strong className="font-extrabold">Reactjs web development</strong>.
                        </span>
                        <br />
                        <span
                            className="
                                hidden
                                xl:inline-block
                            "
                        >
                            After that I joined e-commerce enabler company in Indonesia as a <strong className="font-extrabold">frontend web developer</strong>.
                        </span> 
                        <br />
                        I have been working as frontend web developer for <strong className="font-extrabold">2 years</strong> with some experiences developing 
                        e-commerce website using <strong className="font-extrabold">Pwa Studio (React Js), Next js and Graphql</strong>.
                    </motion.p>
                </div>
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="
                        flex
                        flex-col
                        w-full
                        xl:max-w-[48%]
                        h-full
                    "
                >
                    <div
                        className="
                            flex
                            gap-x-4
                            xl:gap-x-8
                            mx-auto
                            xl:mx-0
                            mb-4
                        "
                    >
                        {
                            aboutData.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className={`
                                        ${index === itemIndex ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300' : 'after:bg-white'}
                                        cursor-pointer
                                        capitalize
                                        xl:text-lg
                                        relative
                                        after:w-8
                                        after:h-[2px]
                                        after:absolute
                                        after:-bottom-1
                                        after:left-0
                                        z-10
                                    `}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            ))
                        }
                    </div>
                    <div
                        className="
                            py-2
                            xl:py-6
                            flex
                            flex-col
                            gap-y-2
                            xl:gap-y-4
                            items-center
                            xl:items-start
                        "
                    >
                        <div
                            className="
                                flex-1
                                flex
                                flex-row
                                max-w-max
                                gap-x-8
                                items-center
                                justify-center
                                text-blueDark
                            "
                        >
                            {
                                selectedData?.info?.map((desc, index) => (
                                    <div key={index}>
                                        <span>{desc.title}</span>
                                        {' - '}
                                        <span>{desc.company}</span>
                                        {' - '}
                                        <span>{desc.stage}</span>
                                    </div>
                                ))
                            }
                            {
                                selectedData?.icons?.map((icon, idx) => (
                                    <div
                                        className="
                                            relative
                                            group
                                            cursor-pointer
                                            text-xl
                                            text-white
                                            z-10
                                        "
                                        key={idx}
                                    >
                                        {generateSkillIcon(icon)}
                                        <div
                                            className="
                                                absolute
                                                pt-[10px]
                                                top-[100%]
                                                right-[50%]
                                                translate-x-1/2
                                                hidden
                                                group-hover:flex
                                            "
                                        >
                                            <div
                                                className="
                                                    bg-white
                                                    relative
                                                    flex
                                                    text-primary
                                                    items-center
                                                    p-[6px]
                                                    rounded-[3px]
                                                "
                                            >
                                                <div
                                                    className="
                                                        text-[10px]
                                                        leading-none
                                                        font-semibold
                                                        capitalize
                                                        text-center
                                                    "
                                                >
                                                    {icon}
                                                </div>
                                                <div 
                                                    className="
                                                        border-solid
                                                        border-l-white
                                                        border-l-8
                                                        border-y-transparent
                                                        border-y-[6px]
                                                        border-r-0
                                                        absolute
                                                        -top-[10px]
                                                        right-[50%]
                                                        translate-x-1/2
                                                        rotate-[270deg]
                                                    "
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage;