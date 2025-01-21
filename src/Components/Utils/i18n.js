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
            Proj1Title: "ERP Project",
            Proj1Description:
              "During my internship (iWare, Sousse), I enhanced a web application by adding advanced features with React, MongoDB, Spring Boot, and JWT. I contributed to developing a super admin management system, license validation, internship and candidate management with Google Meet scheduling, employee training modules, notifications, and real-time communication via WebSockets. These upgrades improved the platform's services and user experience.",
            Proj2Title: "Personal Portfolio",
            Proj2Description: "A continuous portfolio project by Njahi Oussama",
            githubAvailable: "View on GitHub",
            githubNotAvailable: "Not available due to company policy",
            liveAvailable: "View live site",
            liveNotAvailable: "Not available due to company policy",
          },
          contact: {
            contactTitle: "Get in Touch",
            contactIntro:
              "Whether you're interested in discussing a job opportunity, havea project in mind, or just want to say hello, feel free to drop me amessage using the form below. I'd love to connect!",
            namePlaceHolder: "Your Name",
            nameError: "Name must be at least 3 characters.",
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
            Proj1Title: "Projet ERP",
            Proj1Description:
              "Pendant mon stage (iWare, Sousse), j'ai amélioré une application web en ajoutant des fonctionnalités avancées avec React, MongoDB, Spring Boot et JWT. J'ai contribué au développement d'un système de gestion pour super administrateurs, à la validation des licences, à la gestion des stages et des candidats avec la planification via Google Meet, aux modules de formation des employés, aux notifications, ainsi qu'à la communication en temps réel via WebSockets. Ces améliorations ont renforcé les services et l'expérience utilisateur de la plateforme.",
            Proj2Title: "Portfolio Personnel",
            Proj2Description:
              "Un projet de portfolio en constante évolution par Njahi Oussama",
            githubAvailable: "Voir sur GitHub",
            githubNotAvailable:
              "Non disponible en raison de la politique de l'entreprise",
            liveAvailable: "Voir le site en ligne",
            liveNotAvailable:
              "Non disponible en raison de la politique de l'entreprise",
          },
          contact: {
            contactTitle: "Me Contacter",
            contactIntro:
              "Que vous souhaitiez discuter d'une opportunité professionnelle, avoir un projet en tête ou simplement dire bonjour, n'hésitez pas à m'envoyer un message via le formulaire ci-dessous. Je serais ravi de vous répondre !",
            namePlaceHolder: "Votre nom",
            nameError: "Le nom doit comporter au moins 3 caractères.",
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
