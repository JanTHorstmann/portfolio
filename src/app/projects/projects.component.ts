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
    //Join - Project//
    {
      de: {
        img: '../../../assets/img/projects/join_img.png',
        name: 'Join',
        skillTypes: 'JavaScript | HTML | CSS | Git',
        description: 'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren von Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, zuweisen von Benutzern und Kategorien.',
        liveLink: 'http://join.jan-horstmann.eu/html/index.html',
        gitLink: 'https://github.com/JanTHorstmann/Join',
        reverse: false,
      },

      en: {
        img: '../../../assets/img/projects/join_img.png',
        name: 'Join',
        skillTypes: 'JavaScript | HTML | CSS | Git',
        description: 'Task manager modeled on the Kanban system. Create and organize tasks using drag-and-drop functions, assign users and categories.',
        liveLink: 'http://join.jan-horstmann.eu/html/index.html',
        gitLink: 'https://github.com/JanTHorstmann/Join',
        reverse: false,
      },
    },

    //Jump and Run - Project
    {
      de: {
        img: '../../../assets/img/projects/wizard_img.png',
        name: 'Wizard of the Coast',
        skillTypes: 'JavaScript | HTML | CSS',
        description: 'Ein einfaches Jump-and-Run durch Objektorientertung erstelltes Spiel, in dem ein Magier bösartige Kreaturen mit Feuermagie bekämpft.',
        liveLink: 'http://wizardofcoast.jan-horstmann.eu/index.html',
        gitLink: 'https://github.com/JanTHorstmann/Wizard-of-the-coast',
        reverse: true,
        fadeLeft: 'fade-left',
        fadeRight: 'fade-right',
      },

      en: {
        img: '../../../assets/img/projects/wizard_img.png',
        name: 'Wizard of the Coast',
        skillTypes: 'JavaScript | HTML | CSS',
        description: 'A simple jump-and-run game created by object orientation, in which a magician fights evil creatures with fire magic.',
        liveLink: 'http://wizardofcoast.jan-horstmann.eu/index.html',
        gitLink: 'https://github.com/JanTHorstmann/Wizard-of-the-coast',
        reverse: true,
        fadeLeft: 'fade-right',
        fadeRight: 'fade-left',
      },
    },
  ];

}