import { Component, ViewChild, ElementRef } from '@angular/core';
import { AppComponent } from '../../app.component';
import { TranslateService } from '../../translate.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AppComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('aboutMe') aboutMe!: ElementRef;
  @ViewChild('aboutMe_underline') aboutMe_underline!: ElementRef;

  @ViewChild('skills') skills!: ElementRef;
  @ViewChild('skills_underline') skills_underline!: ElementRef;

  @ViewChild('portfolio') portfolio!: ElementRef;
  @ViewChild('portfolio_underLine') portfolio_underLine!: ElementRef;

  translateText: any;

  constructor(private elementRef: ElementRef, private translate: TranslateService) { 
    this.translateText = translate;
  }
  
  addFocusClass(section: string) {
    this.removeClasses()
    if ('aboutMe' == section) {
      this.aboutMe.nativeElement.classList.add('color_FA7902');
      this.aboutMe_underline.nativeElement.classList.add('underline');
    }
    if ('skills' == section) {
      this.skills.nativeElement.classList.add('color_FA7902');
      this.skills_underline.nativeElement.classList.add('underline');
    }
    if ('portfolio' == section) {
      this.portfolio.nativeElement.classList.add('color_FA7902');
      this.portfolio_underLine.nativeElement.classList.add('underline');
    }
  }

  removeClasses() {
    this.aboutMe.nativeElement.classList.remove('color_FA7902');
    this.aboutMe_underline.nativeElement.classList.remove('underline');

    this.skills.nativeElement.classList.remove('color_FA7902');
    this.skills_underline.nativeElement.classList.remove('underline');

    this.portfolio.nativeElement.classList.remove('color_FA7902');
    this.portfolio_underLine.nativeElement.classList.remove('underline');
  }

  // ngAfterViewInit(): void {
  //   const aboutMeElement = this.elementRef.nativeElement.querySelector('app-about-me');
  //   const skillsElement = this.elementRef.nativeElement.querySelector('app-skills');
  //   const projectsElement = this.elementRef.nativeElement.querySelector('app-projects');
  //   if (aboutMeElement && skillsElement && projectsElement) {
  //     window.addEventListener('scroll', () => this.onWindowScroll());

  //   }
  // }

  // onWindowScroll() {
  //   const aboutMe = this.elementRef.nativeElement.querySelector('app-about-me');
  //   const skills = this.elementRef.nativeElement.querySelector('app-skills');
  //   const projects = this.elementRef.nativeElement.querySelector('app-projects');

  //   const rectAbout = aboutMe.getBoundingClientRect();
  //   const rectSkills = skills.getBoundingClientRect();
  //   const rectProjects = projects.getBoundingClientRect();


  //   if (aboutMe && !(rectSkills.top >= 0)) {
  //     // const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     if (rectAbout.top <= window.innerHeight && rectAbout.bottom >= 0) {
  //       // Element is in view, do something
  //       this.addFocusClass('aboutMe');
  //       console.log('aboutMe is in view');
  //     }
  //   }
  //   if (rectSkills.top <= 0) {
  //     // const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     if (rectSkills.top <= window.innerHeight && rectSkills.bottom >= 0) {
  //       // Element is in view, do something
  //       console.log('skills is in view');
  //     }
  //   }
  //   if (projects && !(rectSkills.bottom >= 0)) {
  //     // const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     if (rectProjects.top <= window.innerHeight && rectProjects.bottom >= 0) {
  //       // Element is in view, do something
  //       console.log('projects is in view');
  //     }
  //   }
  // }
}
