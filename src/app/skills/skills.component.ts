import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  translateText: any;

  constructor(private translate: TranslateService) {
    this.translateText = translate;
  }

  SKILLS_IMAGES: any[] = [
    {
      name: 'Angular',
      imgPath: 'angular.png',
    },
    {
      name: 'TypeScript',
      imgPath: 'typescript.png',
    },
    {
      name: 'JavaScript',
      imgPath: 'javascript.png',
    },
    {
      name: 'HTML',
      imgPath: 'html.png',
    },
    {
      name: 'Firebase',
      imgPath: 'firebase.png',
    },
    {
      name: 'GIT',
      imgPath: 'git.png',
    },
    {
      name: 'CSS',
      imgPath: 'css.png',
    },
    {
      name: 'Rest-Api',
      imgPath: 'api.png',
    },
    {
      name: 'Scrum',
      imgPath: 'scrum.png',
    },
    {
      name: 'Material Design',
      imgPath: 'material-design.png',
    },
    {
      name: 'Linux',
      imgPath: 'linux.png',
    },
    {
      name: 'Django',
      imgPath: 'django.png',
    },
    {
      name: 'Python',
      imgPath: 'python.png',
    },
    {
      name: 'Redis',
      imgPath: 'redis.png',
    },
    {
      name: 'PostgreSQL',
      imgPath: 'postgresql.png',
    },
    {
      name: 'SQL',
      imgPath: 'sql.png',
    },    
    {
      name: 'Cloud',
      imgPath: 'cloud.png',
    },
    {
      name: 'Docker',
      imgPath: 'docker.png',
    },
    {
      name: 'RxJS',
      imgPath: 'rxjs.png',
    },
  ]

}
