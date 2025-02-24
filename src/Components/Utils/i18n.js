import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: { order: ["path", "navigator"] },
    fallbackLng: "en",
    //line below is disabled so language detection can work
    // lng: "fr",
    resources: {
      en: {
        translation: {
          navBar: {
            About: "About",
            Projects: "Projects",
            Light: "Light",
            Dark: "Dark",
            System: "System",
            Resume: "Resume",
            English: "English",
            French: "French",
          },
          home: {
            Hello: "Hello There!",
            Name: "I'm",
            Intro:
              "A passionate Web developer, creating amazing websites using React & Spring Boot.",
            ProjectButton: "View My Work",
            ContactButton: "Get in Touch",
          },
          about: {
            AboutMe: "About Me",
            Location: "Tunisia",
            Paragraph: `
              I am a passionate Web developer from Tunisia. My journey in
              web development began with a fascination for how lines of code can
              transform into interactive, beautiful, and functional websites and
              applications. This fascination has grown into a pursuit of
              knowledge and skills across both front-end and back-end
              technologies.`,
            Stacks: "Stacks",
            Tools: "Tools",
          },
          projects: {
            ProjectTitle: "Projects",
            ProjectIntro: "A variety of projects I have worked on.",
            Proj1Title: "Enhancing an ERP Project",
            Proj1Description:
              `During my internship (iWare, Sousse):
          • Built admin dashboard with React, Spring Boot and JWT for managing user roles and access control
          • Created internship management system with Google Meet scheduling for interviews
          • Set up WebSocket system for push and in-app notifications and real time messaging with MongoDB for storage
          • Developed training module to help manage employee professional development`,
          Proj2Title: "Recipe Management Application",
               Proj2Description:
                 `• developed and deployed a full-stack recipe management platform using Node.js/Express.js, implementing role-based access control and JWT/bcrypt authentication for 3 user roles (admin/user/guest)
                  •Engineered secure file handling system using GridFS and Multer for recipe images, integrating Sharp.js for automated image processing and optimization
                  •Designed MongoDB schemas with Mongoose ODM for complex data relationships between users, recipes, and reviews, implementing efficient query optimization
                  •Built robust REST API with middleware-based authorization checks, Morgan request logging, and comprehensive error handling for user profiles, recipes, and review management
                  •Implemented server-side rendering using EJS templates with modular components.`,
                  ProjTitle3: "Personal Portfolio",
            Proj3Description: "A continuous portfolio project by Njahi Oussama",
            githubAvailable: "View on GitHub",
            githubNotAvailable: "Not available",
            liveAvailable: "View live site",
            liveNotAvailable: "Not available",
          },
          contact: {
            contactTitle: "Get in Touch",
            contactIntro:
              "Whether you're interested in discussing a job opportunity, have a project in mind, or just want to say hello, feel free to drop me a message using the form below. I'd love to connect!",
            namePlaceHolder: "Your Name",
            nameError: "Please provide a name with at least 3 characters",
            emailPlaceHolder: "Your Email",
            emailError: "Please enter a valid email address.",
            messagePlaceHolder: "Your Message",
            messageError: "Please provide a message with at least 3 words.",
            sendMsgButton: "Send Message",
          },
          footer: {
            Home: "Home",
            About: "About",
            Projects: "Projects",
            SourceCode: "Source Code",
            Resume: "Resume",
            endPhrase: "Designed & Developed by Oussama Njahi",
          },
        },
      },
      fr: {
        translation: {
          navBar: {
            About: "À propos",
            Projects: "Projets",
            Light: "Clair",
            Dark: "Sombre",
            System: "Système",
            English: "Anglais",
            French: "Français",
          },
          home: {
            Hello: "Bonjour!",
            Name: "Je suis",
            Intro:
              "Un développeur Web passionné, créant des sites web incroyables avec React et Spring Boot.",
            ProjectButton: "Voir mon travail",
            ContactButton: "Me contacter",
          },
          about: {
            AboutMe: "A propos de moi",
            Location: "Tunisie",
            Paragraph: `Je suis un développeur Web passionné originaire de Tunisie. Mon aventure dans le développement web a commencé par une fascination pour la manière dont des lignes de code peuvent se transformer en sites web et applications interactifs, beaux et fonctionnels. Cette fascination s'est transformée en une quête de connaissances et de compétences dans les technologies front-end et back-end.`,
            Stacks: "Technologies",
            Tools: "Outils",
          },
          projects: {
            ProjectTitle: "Projets",
            ProjectIntro: "Une variété de projets sur lesquels j'ai travaillé.",
            Proj1Title: "Extension d'un projet ERP",
            Proj1Description:
              `Pendant mon stage (iWare, Sousse):
               • Développement d’un tableau de bord administrateur avec React, Spring Boot et JWT pour la gestion des rôles
               • Création d’un système de gestion des stages avec planification des entretiens via Google Meet
               • Mise en place d’un système de notifications push et in-app en temps réel avec WebSocket et MongoDB
               • Développement d’un module de formation pour la gestion du développement professionnel`,
               Proj2Title: "Application de Gestion de Recettes",
               Proj2Description:
                 `•Conception et déploiement d'une plateforme full-stack de gestion de recettes avec Node.js/Express.js, implémentant un contrôle d'accès basé sur les rôles et une authentification JWT/bcrypt pour 3 types d'utilisateurs (admin/utilisateur/invité)
                  •Développement d'un système sécurisé de gestion de fichiers utilisant GridFS et Multer pour les images de recettes, avec intégration de Sharp.js pour le traitement et l'optimisation automatique des images
                  •Conception de schémas MongoDB avec Mongoose ODM pour les relations de données complexes entre utilisateurs, recettes et avis, incluant l'optimisation des requêtes
                  •Construction d'une API REST robuste avec vérifications d'autorisation par middleware, journalisation des requêtes Morgan, et gestion complète des erreurs pour les profils utilisateurs, recettes et gestion des avis
                  •Implémentation du rendu côté serveur avec templates EJS et composants modulaires.`,
ProjTitle3: "Portfolio Personnel",
Proj3Description :
              "Un projet de portfolio en constante évolution par Njahi Oussama",
            githubAvailable: "Voir sur GitHub",
            githubNotAvailable:
              "Non disponible",
            liveAvailable: "Voir le site en ligne",
            liveNotAvailable:
              "Non disponible",
          },
          contact: {
            contactTitle: "Me Contacter",
            contactIntro:
              "Que vous souhaitiez discuter d'une opportunité professionnelle, avoir un projet en tête ou simplement dire bonjour, n'hésitez pas à m'envoyer un message via le formulaire ci-dessous. Je serais ravi de vous répondre !",
            namePlaceHolder: "Votre nom",
            nameError: "Veuillez entrer un nom content au moins 3 charactères",
            emailPlaceHolder: "Votre email",
            emailError: "Veuillez entrer une adresse email valide.",
            messagePlaceHolder: "Votre message",
            messageError:
              "Veuillez fournir un message contenant au moins 3 mots.",
            sendMsgButton: "Envoyer le message",
          },
          footer: {
            Home: "Accueil",
            About: "À propos",
            Projects: "Projets",
            SourceCode: "Code source",
            endPhrase: "Conçu et développé par Oussama Njahi",
          },
        },
      },
    },
  });
