import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CommonModule,

  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  
})


export class ProjectComponent {
  @Input() project!: any;

  // @ViewChild('projectView') projectView!: ElementRef;
  // showProject = 'out'
  // scrollSubscription!: Subscription;


  constructor() {
    AOS.init();
  }


}
