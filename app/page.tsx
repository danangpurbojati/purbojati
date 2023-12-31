import React from 'react';
import { Metadata } from 'next';
import Homepage from '@/core/pageContainer/Homepage';
import Transition from '@/core/components/Transition';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Frontend web developer. Experienced developing e-commerce website using React Js, Next Js and Graphql Client',
};

const Home = () => {
    return (
        <>
            <Transition />
            <Homepage />
        </>
    );
};

export default Home;