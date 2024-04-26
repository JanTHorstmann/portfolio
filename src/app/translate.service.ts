import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  language = 'de';
  navbarText = {
    de: {
      aboutMeLink: 'Über mich',
      translateBtn: 'EN',
    },

    en: {
      aboutMeLink: 'About Me',
      translateBtn: 'DE',
    }
  }
  aboutMeText = {
    de : {
      h1: 'Über mich',
      aboutMe: 'Hey! Ich bin Jan Horstmann, 31 Jahre alt. Als Front-End Entwickler bringe ich die Planung und Umsetzung von Web-Applikationen mit. Dank meiner früheren Tätigkeit als lasertechnischer Assistent habe ich umfangreiche Erfahrungen in der Erstellung und dem Verständnis komplexer Programmabläufe gesammelt. Diese Erfahrungen mit den neu erworbenen Fachkenntnissen in der Web-Entwicklung ermöglichen es mir neue Sichtweisen als Front-End Entwickler mit einzubringen',
      bulb: 'In der Weiterbildung bei der Developer Akademie GmbH erwarb ich die Fachkenntnisse und das Know How Web-Anwendung im Frontend zu entwickeln.',
      puzzle: 'In mehreren Einzel- und Gruppenprojekten habe ich gelernt mit HTML, CSS und JavaScript, sowie mit dem Framework Angular zu arbeiten.',
    },

    en : {
      h1: 'About me',
      aboutMe: 'Hey! I am Jan Horstmann, 31 years old. As a front-end developer, I am involved in the planning and implementation of web applications. Thanks to my previous job as a laser technician, I have gained extensive experience in creating and understanding complex program sequences. These experiences with the newly acquired expertise in web development allow me to bring new perspectives as a front-end developer.',
      bulb: 'During my course at the Developer Akademie GmbH, I acquired the specialist knowledge and know-how to develop web applications in the front end.',
      puzzle: 'In individual and group projects I have learned to work with HTML, CSS and JavaScript, as well as with the Angular framework.',
    }
  }
  skillsText = {
    de : {
      h1: 'Skills',
      skillIntroduce: 'Bisher habe ich diese Skills erlernt.',
      contactBtn: 'Kontakt',
    },

    en : {
      h1: 'My skills',
      skillIntroduce: 'I have learned these skills so far.',
      contactBtn: 'Get in touch',
    },
  }

  portfolioText = {
    de : {
      portfolioIntroduce: 'Das ist eine kleine Auswahl meiner Projekte - Testet sie gerne mal aus!',
    },

    en : {
      portfolioIntroduce: 'This is a small selection of my projects - feel free to try them out!',
    },
  }

  contactText = {
    de : {
      h1: 'Kontakt',
      contactIntroduce: 'Haben Sie ein Problem zu lösen oder eine Projektidee?',
      contactMe: 'Kontaktieren Sie mich gerne.',
      contactMessage: 'Ich freue mich von Ihren Ideen zu hören und umzusetzen.',
      contactFormNamePlaceholder: 'Name/Firma*',
      contactFormMessagePlaceholder: 'Nachricht*',
      contactFormNameFalse: 'Bitte geben Sie Ihren Namen oder den Namen Ihres Unternehmens ein.',
      contactFormMailFalse: 'Verwenden Sie bitte ein gültiges E-Mail Format.',
      contactFormMessageFalse: 'Bitte beschreiben Sie kurz Ihr anliegen.',
      privacyPolicyStart: 'Ich habe die ',
      privacyPolicy: 'Datenschutzbestimmungen',
      privacyPolicyEnd: ' gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
      privacyPolicyAlert: 'Bitte Akzeptiere die Datenschutzbestimmungen.',
      contactFormBtn: 'Nachricht Senden',
      messageSend: 'Nachricht gesendet',
    },

    en : {
      h1: 'Contact',
      contactIntroduce: 'Do you have a problem to solve or a project idea?',
      contactMe: 'Please feel free to contact me.',
      contactMessage: 'I look forward to hearing about and implementing your ideas',
      contactFormNamePlaceholder: 'Name/Company*',
      contactFormMessagePlaceholder: 'Message*',
      contactFormNameFalse: 'Please enter your name or the name of your company.',
      contactFormMailFalse: 'Please use a valid e-mail format.',
      contactFormMessageFalse: 'Please briefly describe your request.',
      privacyPolicyStart: 'I have read the ',
      privacyPolicy: 'Privacy Policy',
      privacyPolicyEnd: ' and agree to the processing of my data as outlined.',
      privacyPolicyAlert: 'Please accept the privacy policy.',
      contactFormBtn: 'Send message',
      messageSend: 'Message sent',
    },
  }

    footerText = {
      de : {
        imprint: 'Impressum',
      },
  
      en : {
        imprint: 'Imprint',
      },
    }

  constructor() { }

  changeLanguage() {
    if (this.language == 'de') {
      this.language = 'en';
    } else {
      this.language = 'de';
    }
  }
}
