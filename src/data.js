export const links = [
    {
        name: "Inicio",
        path: "#header"
    },
    {
        name: "Sobre mi",
        path: "#about"
    },
    {
        name: "Habilidades",
        path: "#skills"
    },
    {
        name: "Projectos",
        path: "#projects"
    },
    {
        name: "Contacto",
        path: "#contact"
    }
]

export const projects = [
    {
        type: "Sistema web",
        title: "Sistema de Reclamos",
        image: "complaints.jpg",
        description: "Sistema web para registrar las reclamos y quejas de los usuarios, fue realizado para un curso de base de datos de la universidad. El sistema permite el inicio de sesión según el rol los usuarios, permite el registro de usuario y la creación de quejas. Permite a los administradores ver el seguimiento de todas las quejas registradas de los usuarios y actualizar el estado de estos. Los datos fueron almacenados en una base de datos de tipo relacional.",
        repository: "https://github.com/kattymmc/complaint-system",
        date: "30 de Setiembre de 2020",
        techstack: "NodeJS (handlebars, mongoose, express, bcrypts y passport), MongoDB",
        imagebody: ""
    },
    {
        type: "Sistema web responsive",
        title: "Sistema de gestión documentaria",
        image: "documentary.jpg",
        description: "Este proyecto fue realizado para almacenar los documentos del área de Trámite Documentario de la Facultad de Ingeniería de Sistemas. Fue realizado con el fin de mejorar el los tiempos de trámite. El sistema incluye registro, edición, clasificación, búsqueda y eliminación de los documentos. Los documentos pueden ser almacenados según el tipo solo se mostrará ciertos documentos a los usuarios permitidos.",
        repository: "https://github.com/kattymmc/sistema-escaneo-backend",
        date: "15 de Setiembre del 2020",
        techstack: "Spring Boot, Spring Securiry, JPS, Angular, Typescript, MySQL",
        imagebody: ""
    },
    {
        type: "Sistema web",
        title: "Sistema de seguimiento Smartready",
        image: "smartready.jpg",
        description: "Aplicación de seguimiento de tareas hecha con ReactJS. El sistema permite obtener los datos extraídos de la Base de datos de Netsuite y mostrar todas las tareas asignadas de los usuarios de la Empresa. Incluye funcionalidades de selección de prioridades, muestra de líneas de tiempo, asignación y actualización de tareas.",
        repository: "",
        date:"11 de Noviembre 2022",
        techstack: "React, Javascript, MaterialUI, Netsuite",
        imagebody: ""
    },

]