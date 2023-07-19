import React from 'react';
import { Metadata } from 'next';
import Transition from '@/core/components/Transition';
import ProjectPage from '@/core/pageContainer/ProjectPage';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Frontend web developer. Experienced developing e-commerce website using React Js, Next Js and Graphql Client',
};
const Project = () => {
    return (
        <>
            <Transition />
            <ProjectPage />
        </>
    );
};

export default Project;