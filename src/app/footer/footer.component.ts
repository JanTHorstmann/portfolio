import { Component } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translateText: any;
  constructor(private translate: TranslateService) {
    this.translateText = translate
  }
}
