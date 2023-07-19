import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiGraphql
} from "react-icons/si";

export const generateSkillIcon = (skill: String) => {
    switch (skill) {
    case 'HTML':
        return <SiHtml5 />;
    case 'Css':
        return <SiCss3 />;
    case 'Javascript':
        return <SiJavascript />;
    case 'Typescript':
        return <SiTypescript />;
    case 'ReactJs':
        return <SiReact />;
    case 'NextJs':
        return <SiNextdotjs />;
    case 'Graphql':
        return <SiGraphql />;
    default:
        return null;
    }
};