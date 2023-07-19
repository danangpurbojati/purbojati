import React from 'react';
import { Metadata } from 'next';
import Transition from '@/core/components/Transition';
import AboutPage from '@/core/pageContainer/AboutPage';

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Frontend web developer. Experienced developing e-commerce website using React Js, Next Js and Graphql Client',
};

const About = () => {
    return (
        <>
            <Transition />
            <AboutPage />
        </>
    );
};

export default About;