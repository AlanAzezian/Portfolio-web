export type Language = 'en' | 'es';

export const translations = {
  en: {
    language: "Language",
    backToProjects: "Back to Projects",
    statusTags: {
      completed: "Completed academic project",
      neovidaDetail: "Can continue evolving with new features and improvements.",
      teatroDetail: "Developed as the final assignment for the Programming II course.",
      greedDetail: "Developed as part of my programming coursework."
    },
    hero: {
      subtitle: "Programming Student – UTN General Pacheco",
      description: "I am a programming student passionate about building software and learning new technologies.",
      viewProjects: "View Projects",
      contact: "Contact",
      github: "GitHub",
    },
    about: {
      title: "~/ about me",
      p1_start: "I am currently studying programming at ",
      p1_strong: "Universidad Tecnológica Nacional (UTN)",
      p1_end: " in General Pacheco, Argentina.",
      p2: "I enjoy building software projects and solving problems through code. My goal is to continually grow as a developer, build efficient applications, and work in the software industry.",
      student: "Programming Student",
      university: "UTN General Pacheco",
      development: "Software Development"
    },
    stats: {
      projectsTitle: "Projects Built",
      techTitle: "Technologies Learned",
      studyTitle: "Currently Studying",
      studySub: "Programming"
    },
    timeline: {
      title: "~/ journey",
      events: {
        event1: {
          title: "Start Programming Studies",
          org: "UTN General Pacheco",
          desc: "Began my journey into software development, learning foundational concepts."
        },
        event2: {
          title: "Developed GREED Game Project",
          org: "Academic Project",
          desc: "Applied logical thinking and control structures in C to build a functional console game."
        },
        event3: {
          title: "Developed Teatro Chino System",
          org: "Final Course Project (Programming II)",
          desc: "Built a cinema management system using C++, Object-Oriented Programming, and File Management."
        },
        event4: {
          title: "Developed NeoVida Management System",
          org: "Academic Project",
          desc: "Structured relational databases with SQL Server and connected them via C# logic."
        }
      }
    },
    projects: {
      title: "~/ projects",
      viewProject: "View Project",
      items: {
        neovida: {
          title: "NeoVida – Medical Management System",
          desc: "A medical management system developed as an academic project to organize and manage patient information using a structured database."
        },
        teatro: {
          title: "Teatro Chino TCL – Cinema Management System",
          desc: "A cinema management system developed as a final project for a Programming II course, designed to manage movies, cinema rooms, and ticket sales."
        },
        greed: {
          title: "GREED – Game Development Project",
          desc: "A game developed as part of a programming assignment focused on logic, algorithms and control structures."
        }
      },
      details: {
        neovida: {
          p1: "NeoVida is a management system developed as an academic project with the goal of organizing and managing medical information within a healthcare environment. The system allows users to register, consult and update patient information while storing data in a structured database.",
          architecture: "Project Architecture",
          architectureDesc: "The application interacts heavily with a relational database to store and retrieve patient profiles, medical histories, and system configurations. The structured C# logic layer acts as a bridge ensuring safe query execution and data validation before displaying it on the interface.",
          featuresTitle: "Main Features",
          features: [
            "Patient registration",
            "Medical data consultation",
            "Data update and modification",
            "Database-based data organization",
            "Interaction between the application and SQL Server"
          ],
          learningsTitle: "What I Learned",
          learningsDesc: "During the development of NeoVida I learned how to design and structure relational databases, connect an application with SQL Server and organize the logic behind a management system. This project helped strengthen my programming and data management skills.",
          statusTitle: "Project Status"
        },
        teatro: {
          p1: "This project is a cinema management system developed as a final project for a Programming II course. The system was designed to manage information related to movies, cinema rooms and ticket sales.",
          p2: "The program allows users to register movies, assign them to cinema rooms, manage ticket sales and generate operational reports. The system uses object-oriented programming and file-based data storage to simulate the management of a real cinema.",
          architecture: "Project Architecture",
          architectureDesc: "The system achieves a clean separation of concerns by isolating business logic into object-oriented entity classes. These entities communicate with a dedicated file management layer responsible for reading and writing binary data to disk, ensuring that the core logic remains independent of the storage mechanism.",
          operationTitle: "System Operation",
          mainMenuTitle: "Main Menu",
          mainMenuDesc: "Initial screen of the C++ cinema management system. From this menu, the user can access features like movie management, ticket sales, queries, and report generation.",
          movieMngTitle: "Movie Management",
          movieSlides: [
            {
              title: "Movie Menu",
              description: "Screen of the movie management menu where the user can access system operations related to movies."
            },
            {
              title: "Movie Registration",
              description: "Console form where the user inputs the necessary data to register a new movie in the system."
            },
            {
              title: "Movie List",
              description: "Screen where the system displays all stored movies, allowing visualization of the registered information."
            }
          ],
          ticketSalesTitle: "Ticket Sales",
          ticketSlides: [
             {
               title: "Ticket Sales",
               description: "Screen where the user selects the movie and the number of tickets to sell, initiating the registration process of a sale."
             },
             {
               title: "Sale Confirmation",
               description: "Screen where the system displays the transaction summary and confirms the registration of the completed sale."
             },
             {
               title: "Sales List",
               description: "Screen showing all sales registered in the system, allowing the user to view the stored operations."
             }
          ],
          reportsTitle: "System Reports",
          reportsMenuTitle: "Reports",
          reportsMenuDesc: "Screen where the system displays information generated from stored data, allowing visualization of statistics, revenue performance, and ticket sales summaries.",
          featuresTitle: "Main Features",
          features: [
             "Movie registration and management",
             "Cinema room administration",
             "Ticket sales management",
             "Assignment of movies to cinema rooms",
             "Menu-based console interface"
          ],
          reportsGeneratedTitle: "Reports Generated",
          reportsGenerated: [
             "Revenue by time period",
             "Revenue by movie title",
             "Ticket sales by genre",
             "Cinema room occupancy",
             "Reports by room type",
             "Popcorn sales report",
             "List of movies projected in each room"
          ],
          sysArchTitle: "System Architecture",
          sysArchDescHtml: "The system was designed using multiple classes representing the main cinema entities, including <strong>Movie, Room, Sale and Date</strong>. Additional classes were implemented to manage file storage for each entity.",
          statusTitle: "Project Status"
        },
        greed: {
          p1: "GREED is a programming project developed as part of a university assignment. The objective of the project was to build a functional game while applying core programming concepts such as algorithms, control structures, and problem solving.",
          p2: "The project focuses on implementing the internal logic of the game, handling player interactions, and managing the game state through code.",
          architecture: "Project Architecture",
          architectureDesc: "The program processes player input sequentially. The game loop captures commands natively, evaluates the actions through the game's logic algorithms, updates the internal memory structures representing the game state, and finally renders the new frame back to the console output.",
          featuresTitle: "Main Features",
          features: [
            "Implementation of game mechanics using C",
            "Player interaction through console input",
            "Game state management",
            "Use of loops, conditionals and structured logic",
            "Problem solving through algorithm design"
          ],
          learningsTitle: "What I Learned",
          learningsDesc: "Through this project I strengthened my understanding of programming fundamentals such as loops, conditionals, and algorithm design. Developing GREED helped me improve my logical thinking and problem-solving skills while building a complete interactive program.",
          statusTitle: "Project Status"
        }
      }
    },
    skills: {
      title: "~/ skills"
    },
    contact: {
      title: "~/ say hi",
      desc: "Feel free to reach out for collaborations or just a friendly chat.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      rights: "Alan Azezian. All rights reserved."
    }
  },
  es: {
    language: "Idioma",
    backToProjects: "Volver a Proyectos",
    statusTags: {
      completed: "Proyecto académico completado",
      neovidaDetail: "Puede seguir evolucionando con nuevas funcionalidades y mejoras.",
      teatroDetail: "Desarrollado como trabajo final para la asignatura Programación II.",
      greedDetail: "Desarrollado como parte de mis prácticas de programación."
    },
    hero: {
      subtitle: "Estudiante de Programación – UTN General Pacheco",
      description: "Soy un estudiante de programación apasionado por crear software y aprender nuevas tecnologías.",
      viewProjects: "Ver Proyectos",
      contact: "Contacto",
      github: "GitHub",
    },
    about: {
      title: "~/ sobre mi",
      p1_start: "Actualmente estudio programación en la ",
      p1_strong: "Universidad Tecnológica Nacional (UTN)",
      p1_end: " en General Pacheco, Argentina.",
      p2: "Disfruto construyendo proyectos de software y resolviendo problemas a través del código. Mi objetivo es crecer continuamente como desarrollador, construir aplicaciones eficientes y trabajar en la industria del software.",
      student: "Estudiante de Programación",
      university: "UTN General Pacheco",
      development: "Desarrollo de Software"
    },
    stats: {
      projectsTitle: "Proyectos Creados",
      techTitle: "Tecnologías Aprendidas",
      studyTitle: "Actualmente Estudiando",
      studySub: "Programación"
    },
    timeline: {
      title: "~/ trayectoria",
      events: {
        event1: {
          title: "Inicio Estudios en Programación",
          org: "UTN General Pacheco",
          desc: "Comencé mi viaje en el desarrollo de software, aprendiendo conceptos fundamentales."
        },
        event2: {
          title: "Desarrollo del Juego GREED",
          org: "Proyecto Académico",
          desc: "Apliqué pensamiento lógico y estructuras de control en C para construir un juego de consola funcional."
        },
        event3: {
          title: "Desarrollo del Sistema Teatro Chino",
          org: "Proyecto Final de Curso (Programación II)",
          desc: "Construí un sistema de gestión de cines utilizando C++, Programación Orientada a Objetos y Manejo de Archivos."
        },
        event4: {
          title: "Desarrollo del Sistema NeoVida",
          org: "Proyecto Académico",
          desc: "Estructuré bases de datos relacionales con SQL Server y las conecté mediante lógica en C#."
        }
      }
    },
    projects: {
      title: "~/ proyectos",
      viewProject: "Ver Proyecto",
      items: {
        neovida: {
          title: "NeoVida – Sistema de Gestión Médica",
          desc: "Un sistema de gestión médica desarrollado como proyecto académico para organizar y gestionar la información de pacientes utilizando una base de datos estructurada."
        },
        teatro: {
          title: "Teatro Chino TCL – Sistema de Gestión de Cines",
          desc: "Un sistema de gestión de cines desarrollado como proyecto final para el curso de Programación II, diseñado para gestionar películas, salas de cine y venta de entradas."
        },
        greed: {
          title: "GREED – Proyecto de Desarrollo de Juego",
          desc: "Un juego desarrollado como parte de un trabajo de programación enfocado en la lógica, algoritmos y estructuras de control."
        }
      },
      details: {
        neovida: {
          p1: "NeoVida es un sistema de gestión desarrollado como proyecto académico con el objetivo de organizar y administrar información médica dentro de un entorno de salud. El sistema permite a los usuarios registrar, consultar y actualizar información de pacientes mientras almacena los datos en una base de datos estructurada.",
          architecture: "Arquitectura del Proyecto",
          architectureDesc: "La aplicación interactúa fuertemente con una base de datos relacional para almacenar y recuperar perfiles de pacientes, historias clínicas y configuraciones del sistema. La capa de lógica estructurada en C# actúa como un puente que asegura la ejecución segura de consultas y validación de datos antes de mostrarlos en la interfaz.",
          featuresTitle: "Características Principales",
          features: [
            "Registro de pacientes",
            "Consulta de datos médicos",
            "Actualización y modificación de datos",
            "Organización de datos basada en base de datos",
            "Interacción entre la aplicación y SQL Server"
          ],
          learningsTitle: "Lo que Aprendí",
          learningsDesc: "Durante el desarrollo de NeoVida aprendí cómo diseñar y estructurar bases de datos relacionales, conectar una aplicación con SQL Server y organizar la lógica detrás de un sistema de gestión. Este proyecto ayudó a fortalecer mis habilidades de programación y gestión de datos.",
          statusTitle: "Estado del Proyecto"
        },
        teatro: {
          p1: "Este proyecto es un sistema de gestión de cines desarrollado como proyecto final para un curso de Programación II. El sistema fue diseñado para gestionar información relacionada con películas, salas de cine y venta de entradas.",
          p2: "El programa permite a los usuarios registrar películas, asignarlas a salas de cine, gestionar ventas de tickets y generar reportes operativos. El sistema utiliza programación orientada a objetos y almacenamiento de datos basado en archivos para simular la gestión de un cine real.",
          architecture: "Arquitectura del Proyecto",
          architectureDesc: "El sistema logra una separación limpia de responsabilidades aislando la lógica de negocio en clases de entidad orientadas a objetos. Estas entidades se comunican con una capa de gestión de archivos dedicada, responsable de leer y escribir datos binarios en el disco, asegurando que la lógica principal permanezca independiente del mecanismo de almacenamiento.",
          operationTitle: "Operación del Sistema",
          mainMenuTitle: "Menú Principal",
          mainMenuDesc: "Pantalla inicial del sistema de gestión de cines en C++. Desde este menú, el usuario puede acceder a funciones como gestión de películas, venta de tickets, consultas y generación de reportes.",
          movieMngTitle: "Gestión de Películas",
          movieSlides: [
            {
              title: "Menú de Películas",
              description: "Pantalla del menú de gestión de películas donde el usuario puede acceder a operaciones del sistema relacionadas con las películas."
            },
            {
              title: "Alta de Películas",
              description: "Formulario de consola donde el usuario ingresa los datos necesarios para registrar una nueva película en el sistema."
            },
            {
              title: "Listado de Películas",
              description: "Pantalla donde el sistema muestra todas las películas almacenadas, permitiendo la visualización de la información registrada."
            }
          ],
          ticketSalesTitle: "Venta de Entradas",
          ticketSlides: [
             {
               title: "Venta de Entradas",
               description: "Pantalla donde el usuario selecciona la película y la cantidad de entradas a vender, iniciando el proceso de registro de una venta."
             },
             {
               title: "Confirmación de Venta",
               description: "Pantalla donde el sistema muestra el resumen de la transacción y confirma el registro de la venta completada."
             },
             {
               title: "Listado de Ventas",
               description: "Pantalla que muestra todas las ventas registradas en el sistema, permitiendo al usuario visualizar las operaciones almacenadas."
             }
          ],
          reportsTitle: "Reportes del Sistema",
          reportsMenuTitle: "Reportes",
          reportsMenuDesc: "Pantalla donde el sistema muestra información generada a partir de datos almacenados, permitiendo la visualización de estadísticas, rendimiento de ingresos y resúmenes de venta de tickets.",
          featuresTitle: "Características Principales",
          features: [
             "Registro y gestión de películas",
             "Administración de salas de cine",
             "Gestión de venta de entradas",
             "Asignación de películas a salas de cine",
             "Interfaz de consola basada en menú"
          ],
          reportsGeneratedTitle: "Reportes Generados",
          reportsGenerated: [
             "Ingresos por período de tiempo",
             "Ingresos por título de película",
             "Venta de tickets por género",
             "Ocupación de salas de cine",
             "Reportes por tipo de sala",
             "Reporte de ventas de pochoclos",
             "Listado de películas proyectadas en cada sala"
          ],
          sysArchTitle: "Arquitectura del Sistema",
          sysArchDescHtml: "El sistema fue diseñado utilizando múltiples clases que representan las entidades principales del cine, incluyendo <strong>Movie (Película), Room (Sala), Sale (Venta) y Date (Fecha)</strong>. Se implementaron clases adicionales para gestionar el almacenamiento de archivos de cada entidad.",
          statusTitle: "Estado del Proyecto"
        },
        greed: {
          p1: "GREED es un proyecto de programación desarrollado como parte de un trabajo universitario. El objetivo del proyecto fue construir un juego funcional mientras se aplicaban conceptos centrales de programación como algoritmos, estructuras de control y resolución de problemas.",
          p2: "El proyecto se centra en implementar la lógica interna del juego, manejar interacciones del jugador y gestionar el estado del juego mediante código.",
          architecture: "Arquitectura del Proyecto",
          architectureDesc: "El programa procesa secuencialmente la entrada del jugador. El bucle del juego captura los comandos de forma nativa, evalúa las acciones mediante los algoritmos de lógica del juego, actualiza las estructuras de memoria internas que representan el estado del juego y finalmente renderiza el nuevo cuadro devuelta a la salida de la consola.",
          featuresTitle: "Características Principales",
          features: [
            "Implementación de mecánicas de juego en C",
            "Interacción del jugador mediante entrada en consola",
            "Gestión del estado del juego",
            "Uso de bucles, condicionales y lógica estructurada",
            "Resolución de problemas mediante diseño de algoritmos"
          ],
          learningsTitle: "Lo que Aprendí",
          learningsDesc: "A través de este proyecto fortalecí mi comprensión de los fundamentos de programación como bucles, condicionales y diseño de algoritmos. Desarrollar GREED me ayudó a mejorar mi pensamiento lógico y habilidades para resolver problemas mientras construía un programa interactivo completo.",
          statusTitle: "Estado del Proyecto"
        }
      }
    },
    skills: {
      title: "~/ habilidades"
    },
    contact: {
      title: "~/ hola",
      desc: "No dudes en contactarme para colaboraciones o simplemente para tener una charla amigable.",
      email: "Correo",
      github: "GitHub",
      linkedin: "LinkedIn",
      rights: "Alan Azezian. Todos los derechos reservados."
    }
  }
};
