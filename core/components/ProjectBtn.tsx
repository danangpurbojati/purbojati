import React from 'react';
import Link from 'next/link';
import { 
    HiArrowRight
} from "react-icons/hi2";

const ProjectBtn = () => {
    return (
        <div className="mx-auto xl:mx-0">
            <Link
                href="/project"
                className="
                    relative
                    w-[200px]
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
            >
                <span
                    className="
                        pr-2
                        group-hover:translate-x-2
                        transition-all
                        duration-200
                    "
                >
                    My Projects
                </span>
                <HiArrowRight 
                    className="
                        text-2xl
                        group-hover:translate-x-2
                        transition-all
                        duration-300
                    "
                />
            </Link>

        </div>
    );
};

export default ProjectBtn;