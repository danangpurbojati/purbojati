"use client";
import React from 'react';
import { motion } from 'framer-motion';

const transitionVariants = {
    initial: {
        x: '100%',
        width: '100%'
    },
    animate: {
        x: '0%',
        width: '0%',
    },
    exit: {
        x: ['0%', '0%'],
        width: ['0%', '0%']
    }
};

const Transition = () => {
    return (
        <>
            <motion.div
                className="
                    fixed
                    top-0
                    bottom-0
                    right-full
                    w-screen
                    h-screen
                    z-30
                    bg-[#2e2257]
                "
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.1,
                    duration: 0.3,
                    ease: 'easeInOut'
                }}
            />
            <motion.div
                className="
                    fixed
                    top-0
                    bottom-0
                    right-full
                    w-screen
                    h-screen
                    z-20
                    bg-[#3b2d71]
                "
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.2,
                    duration: 0.3,
                    ease: 'easeInOut'
                }}
            />
            <motion.div
                className="
                    fixed
                    top-0
                    bottom-0
                    right-full
                    w-screen
                    h-screen
                    z-10
                    bg-[#4b3792]
                "
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.3,
                    duration: 0.3,
                    ease: 'easeInOut'
                }}
            />
        </>
    );
};

export default Transition;