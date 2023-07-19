"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../helpers/animationVariants';
import { FaPhone, FaEnvelope } from "react-icons/fa6";

const ContactPage = () => {
    return (
        <div 
            className="
                h-full
                py-32
                text-center
            "
        >
            <div
                className="
                    container mx-auto
                "
            >
                <motion.h2
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="h2 xl:mt-12"
                >
                    Contact <span className="text-accent">Me</span>
                </motion.h2>
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="m-4"
                >
                    <a
                        className="
                            relative
                            w-[320px]
                            mx-auto
                            h-[48px]
                            flex
                            justify-center
                            items-center
                            group
                            z-10
                            p-4
                            bg-accent/30
                            hover:bg-accent
                            transition-all
                            duration-200
                        "
                        href="mailto:danangpurbojati@gmail.com"
                    >
                        <FaEnvelope className="text-xl mr-2" />
                        <span>danangpurbojati@gmail.com</span>
                    </a>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <a
                        className="
                            relative
                            w-[240px]
                            mx-auto
                            h-[48px]
                            flex
                            justify-center
                            items-center
                            group
                            z-10
                            p-4
                            bg-accent/50
                            hover:bg-accent
                            transition-all
                            duration-200
                        "
                        href="tel:+6281235717712"
                    >
                        <FaPhone className="text-xl mr-2" />
                        <span>+6281-235-717-712</span>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;