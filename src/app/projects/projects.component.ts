import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  translateText: any;
  constructor(private translate: TranslateService) {
    this.translateText = translate
  }

  projects: any[] = [
    // //Join - Project//
    // {
    //   de: {
    //     img: '../../../assets/img/projects/join_img.png',
    //     name: 'Join',
    //     skillTypes: 'JavaScript | HTML | CSS | Git',
    //     description: 'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren von Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, zuweisen von Benutzern und Kategorien.',
    //     liveLink: 'http://join.jan-horstmann.eu/html/index.html',
    //     gitLinkFrontEnd: 'https://github.com/JanTHorstmann/Join',
    //     reverse: false,
    //     ownBackEnd: false,
    //   },

    //   en: {
    //     img: '../../../assets/img/projects/join_img.png',
    //     name: 'Join',
    //     skillTypes: 'JavaScript | HTML | CSS | Git',
    //     description: 'Task manager modeled on the Kanban system. Create and organize tasks using drag-and-drop functions, assign users and categories.',
    //     liveLink: 'http://join.jan-horstmann.eu/html/index.html',
    //     gitLinkFrontEnd: 'https://github.com/JanTHorstmann/Join',
    //     reverse: false,
    //     ownBackEnd: false,
    //   },
    // },

    //Jump and Run - Project
    {
      de: {
        img: '../../../assets/img/projects/wizard_img.png',
        name: 'Wizard of the Coast',
        skillTypes: 'JavaScript | HTML | CSS',
        description: 'Ein einfaches Jump-and-Run durch Objektorientertung erstelltes Spiel, in dem ein Magier bösartige Kreaturen mit Feuermagie bekämpft.',
        liveLink: 'http://wizardofcoast.jan-horstmann.eu/index.html',
        gitLinkFrontEnd: 'https://github.com/JanTHorstmann/Wizard-of-the-coast',
        gitLinkBackEnd: '',
        reverse: false,
        ownBackEnd: false,
      },

      en: {
        img: '../../../assets/img/projects/wizard_img.png',
        name: 'Wizard of the Coast',
        skillTypes: 'JavaScript | HTML | CSS',
        description: 'A simple jump-and-run game created by object orientation, in which a magician fights evil creatures with fire magic.',
        liveLink: 'http://wizardofcoast.jan-horstmann.eu/index.html',
        gitLinkFrontEnd: 'https://github.com/JanTHorstmann/Wizard-of-the-coast',
        gitLinkBackEnd: '',
        reverse: false,
        ownBackEnd: false,
      },
    },

    //Da-Bubble - Project
    {
      de: {
        img: '../../../assets/img/projects/da_bubble_img.png',
        name: 'Da-Bubble',
        skillTypes: 'Angular | Firebase | Material Design | TypeScript | HTML | SCSS',
        description: 'DA-Bubble ist ein Slack-ähnlicher Klon, den ich als Abschlussprojekt meines Frontend-Kurses erstellt habe. Mit Angular und Firebase bietet Dabubble Echtzeit-Messaging, Kanäle und Benutzerauthentifizierung. Es ist eine unterhaltsame, interaktive App, die meine Fähigkeiten in der modernen Webentwicklung zeigt.',
        liveLink: 'https://dabubble.jan-horstmann.eu/',
        gitLinkFrontEnd: 'https://github.com/JanTHorstmann/Da-Bubble',
        gitLinkBackEnd: '',
        reverse: true,
        ownBackEnd: false,
      },

      en: {
        img: '../../../assets/img/projects/da_bubble_img.png',
        name: 'Da-Bubble',
        skillTypes: 'Angular | Firebase | Material Design | TypeScript | HTML | SCSS',
        description: 'DA-Bubble is a Slack-like clone that I created as a final project for my frontend course. Using Angular and Firebase, Dabubble offers real-time messaging, channels and user authentication. It is a fun, interactive app that showcases my skills in modern web development.',
        liveLink: 'https://dabubble.jan-horstmann.eu/',
        gitLinkFrontEnd: 'https://github.com/JanTHorstmann/Da-Bubble',
        gitLinkBackEnd: '',
        reverse: true,
        ownBackEnd: false,
      },
    },

    //Videoflix - Project
    {
      de: {
        img: '../../../assets/img/projects/videoflix_img.png',
        name: 'Videoflix',
        skillTypes: 'Django | PostgreSQL | Angular | Django-RQ',
        description: 'Videoflix ist eine Streaming-Plattform, die ich als Backend-Projekt entwickelt habe. Mit Django als Framework und PostgreSQL als Datenbank ermöglicht Videoflix die Registrierung von Usern, das Speichern und Abrufen von Videos sowie das Tracking des Video-Fortschritts. Zusätzlich sind Redis und Django RQ für asynchrone Aufgaben integriert. Der Server läuft stabil mit Nginx, Gunicorn und Supervisor. Dieses Projekt zeigt meine Fähigkeiten in der Backend-Entwicklung und der Arbeit mit skalierbaren Webanwendungen.',
        liveLink: 'https://videoflix.jan-horstmann.eu/',
        gitLinkFrontEnd: 'https://github.com/JanTHorstmann/videoflix_frontend',
        gitLinkBackEnd: 'https://github.com/JanTHorstmann/Videoflix_backend',
        reverse: false,
        ownBackEnd: true,
      },

      en: {
        img: '../../../assets/img/projects/videoflix_img.png',
        name: 'Videoflix',
        skillTypes: 'Django | PostgreSQL | Angular | Django-RQ',
        description: 'Videoflix is a streaming platform that I developed as a backend project. Built with Django as the framework and PostgreSQL as the database, Videoflix allows users to register, store, and retrieve videos while tracking their progress. Additionally, Redis and Django RQ are integrated for asynchronous tasks. The server runs reliably with Nginx, Gunicorn, and Supervisor. This project demonstrates my skills in backend development and working with scalable web applications.',
        liveLink: 'https://videoflix.jan-horstmann.eu/',
        gitLinkFrontEnd: 'https://github.com/JanTHorstmann/videoflix_frontend',
        gitLinkBackEnd: 'https://github.com/JanTHorstmann/Videoflix_backend',
        reverse: false,
        ownBackEnd: true,
      },
    },
  ];

}