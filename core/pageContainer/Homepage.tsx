"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../helpers/animationVariants';
import ProjectBtn from '../components/ProjectBtn';
import Avatar from '../components/Avatar';
import ParticlesContainer from '../components/ParticlesContainer';

const Homepage = () => {
    return (
        <div
            className="
                h-full
            "
        >
            <div
                className="
                    w-full
                    h-full
                "
            >
                <div
                    className="
                        text-center
                        flex
                        flex-col
                        justify-center
                        xl:pt-32
                        xl:text-left
                        h-full
                        container
                        mx-auto
                    "
                >
                    <motion.h1
                        variants={fadeIn('down', 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h1"
                    >
                        Hello
                        {' '}
                        <span className="text-accent">World</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeIn('down', 0.3)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="
                            max-w-sm
                            xl:max-w-xl
                            mx-auto
                            xl:mx-0
                            mb-4
                            xl:mb-4
                        "
                    >
                        Hi, I&apos;m Danang - <strong className="font-extrabold">Frontend Web developer</strong> based in Indonesia
                        <br />
                        Experienced developing e-commerce website using <strong className="font-extrabold">Reactjs, Nextjs and Graphql Client</strong>
                    </motion.p>
                    <motion.div
                        variants={fadeIn('down', 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="
                            flex
                            justify-center
                            xl:hidden
                        "
                    >
                        <ProjectBtn />
                    </motion.div>
                    <motion.div
                        variants={fadeIn('down', 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="
                            hidden
                            xl:flex
                        "
                    >
                        <ProjectBtn />
                    </motion.div>
                </div>
            </div>
            <div
                className="
                    w-[1200px]
                    h-full
                    absolute
                    right-0
                    bottom-0
                "
            >
                <div
                    className="
                        bg-none
                        w-full
                        h-full
                        absolute
                        translate-z-0
                    "
                ></div>

                <ParticlesContainer />

                <motion.div 
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{
                        duration: 1,
                        ease: 'easeInOut'
                    }}
                    className="
                        w-full
                        h-full
                        max-w-[437px]
                        max-h-[378px]
                        absolute
                        lg:bottom-[20%]
                        lg:right-[15%]
                    "
                >
                    <Avatar />
                </motion.div>
            </div>
        </div>
    );
};

export default Homepage;