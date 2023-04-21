import { FormattedMessage } from 'react-intl';

export const links = [
    {
        name: "home",
        path: "#header"
    },
    {
        name: "about",
        path: "#about"
    },
    {
        name: "skills",
        path: "#skills"
    },
    {
        name: "projects",
        path: "#projects"
    },
    {
        name: "contact",
        path: "#contact"
    }
]

export const projects = [
    {
        type: <FormattedMessage id='projects.psubtitle1' />,
        title: <FormattedMessage id='projects.ptitle1' />,
        image: "complaints.jpg",
        description: <FormattedMessage id='projects.pdescription1' />,
        repository: "https://github.com/kattymmc/complaint-system",
        date: <FormattedMessage id='projects.pdate1' />,
        techstack: "NodeJS (handlebars, mongoose, express, bcrypts y passport), MongoDB",
        imagebody: ""
    },
    {
        type: <FormattedMessage id='projects.psubtitle2' />,
        title: <FormattedMessage id='projects.ptitle2' />,
        image: "documentary.jpg",
        description:  <FormattedMessage id='projects.pdescription2' />,
        repository: "https://github.com/kattymmc/sistema-escaneo-backend",
        date: <FormattedMessage id='projects.pdate2' />,
        techstack: "Spring Boot, Spring Security, JPA, Angular, Typescript, MySQL",
        imagebody: ""
    },
    {
        type: <FormattedMessage id='projects.psubtitle3' />,
        title: <FormattedMessage id='projects.ptitle3' />,
        image: "sysbusqdoc.png",
        description:  <FormattedMessage id='projects.pdescription3' />,
        repository: "https://github.com/kattymmc/sistema-busqueda-docente",
        date: <FormattedMessage id='projects.pdate3' />,
        techstack: "Spring Boot, Spring Security, JPA, ThymeLeaf, MySQL",
        imagebody: ""
    },
    {
        type: <FormattedMessage id='projects.psubtitle4' />,
        title: <FormattedMessage id='projects.ptitle4' />,
        image: "smartready.jpg",
        description:  <FormattedMessage id='projects.pdescription4' />,
        repository: "",
        date: <FormattedMessage id='projects.pdate4' />,
        techstack: "React, Javascript, MaterialUI, Netsuite",
        imagebody: ""
    }
]