import { Component } from '@angular/core';
import { AboutMeComponent } from './../about-me/about-me.component';
import { SkillsComponent } from './../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactFormComponent } from './../contact-form/contact-form.component';
import { IntroduceComponent } from './../introduce/introduce.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    IntroduceComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactFormComponent,
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
