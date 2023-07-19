import React from 'react';
import { Metadata } from 'next';
import Transition from '@/core/components/Transition';
import ContactPage from '@/core/pageContainer/ContactPage';

export const metadata: Metadata = {
    title: 'Contact Me',
    description: 'Frontend web developer. Experienced developing e-commerce website using React Js, Next Js and Graphql Client',
};

const Contact = () => {
    return (
        <>
            <Transition />
            <ContactPage />
        </>
    );
};

export default Contact;