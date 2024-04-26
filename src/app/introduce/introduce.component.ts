import { Component, ElementRef   } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-introduce',
  standalone: true,
  imports: [
    NavbarComponent,    
  ],
  templateUrl: './introduce.component.html',
  styleUrl: './introduce.component.scss'
})

export class IntroduceComponent{
  responsiveMenu: boolean = false;
  translateText: any;
  constructor(private elementRef: ElementRef,  private translate: TranslateService) {
    this.translateText = translate;
   }

  schowResponsiveMenu() {
    this.responsiveMenu = !this.responsiveMenu;
    
    if (this.responsiveMenu) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
    }
  }

  closeResponsiveMenu() {
    this.responsiveMenu = false;
    document.documentElement.style.overflowY = 'auto';
  }

}
