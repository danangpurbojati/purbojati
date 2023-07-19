"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../helpers/animationVariants';
import WorkSlider from '../components/WorkSlider';

const ProjectPage = () => {
    return (
        <div 
            className="
                h-full
                py-32
                flex
                items-center
            "
        >
            <div
                className="
                    container mx-auto
                "
            >
                <div
                    className="
                        flex
                        flex-col
                        xl:flex-row
                        gap-x-8
                    "
                >
                    <div
                        className="
                            text-center
                            flex
                            xl:w-[30vw]
                            flex-col
                            lg:text-left
                            mb-4
                            xl:mb-0
                        "
                    >
                        <motion.h2
                            variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="h2 xl:mt-12"
                        >
                            My <span className="text-accent">Work</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('up', 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="
                                mb-4
                                max-w-[480px]
                                mx-auto
                                lg:mx-0
                            "
                        >
                            Here are few projects i&apos;ve worked on recently
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="
                            w-full
                            xl:max-w-[65%]
                        "
                    >
                        <WorkSlider />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;