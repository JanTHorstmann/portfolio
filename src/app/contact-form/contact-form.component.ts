import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, FormBuilder, Validators, FormsModule, NgForm } from '@angular/forms';
import { TranslateService } from '../translate.service';
// import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // MatFormFieldModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  checked: boolean = false;
  messageSend: boolean = false;
  messageHide: boolean = true;

  correctName: boolean = false;
  correctEmail: boolean = false;
  correctMessage: boolean = false;

  falseName: boolean = false;
  falseEmail: boolean = false;
  falseMessage: boolean = false;

  imgSrc: string = '../../assets/img/contact_form/go_up.png';
  // name!: string;
  // email!: string;
  // message!: string;

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  translateText: any;
  constructor(private translate: TranslateService) {
    this.translateText = translate
  }


  http = inject(HttpClient);

  mailTest = true;

  post = {
    endPoint: 'https://portfolio.jan-horstmann.eu/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (this.isNameFilled() && this.isEmailFilled() && this.isMessageFilled()) {
      if (ngForm.submitted && ngForm.form.valid) {
        this.messageHide = false;
        setTimeout(() => {
          this.messageSend = true;
        }, 10);
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              setTimeout(() => {
                ngForm.resetForm();
              }, 2000);
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => {
              setTimeout(() => {
                this.messageHide = true;
                this.messageSend = false;
                this.resetNameInput();
                this.resetEmailInput();
                this.resetMessageInput();
              }, 2000);
            },
          });
      }
    }
  }














  sendMail(event: Event, ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }

    event.preventDefault();
    // this.fillEntry();
    this.disableInputs();
    setTimeout(() => {
      this.enableInputs(); //if message send
    }, 3000);
  }

  disableInputs() {
    if (this.contactData.name && this.contactData.email && this.contactData.message) {
      this.nameField.nativeElement.disabled = true;
      this.emailField.nativeElement.disabled = true;
      this.messageField.nativeElement.disabled = true;
      this.button.nativeElement.disabled = true;
    }
  }

  enableInputs() {
    if (this.contactData.name && this.contactData.email && this.contactData.message) {
      this.nameField.nativeElement.disabled = false;
      this.emailField.nativeElement.disabled = false;
      this.messageField.nativeElement.disabled = false;
      this.button.nativeElement.disabled = false;
    }
  }

  // fillEntry() {
  //   // this.name = this.nameField.nativeElement.value;
  //   // this.email = this.emailField.nativeElement.value;
  //   // this.message = this.messageField.nativeElement.value;

  //   this.isNameFilled();
  //   this.isEmailFilled();
  //   this.isMessageFilled();


  //   // console.log('nameField:', this.nameField.nativeElement.value);
  //   // console.log('emailField:', this.nameField.nativeElement.value);
  //   // console.log('messageField:', this.messageField.nativeElement.value);
  // }

  isNameFilled() {
    if (this.contactData.name.length > 0) {
      this.falseName = false
      this.correctName = true;
      return true
    } else {
      this.falseName = true;
      return false
    }
  }

  isEmailFilled() {
    if (this.contactData.email.includes('@')) {
      this.falseEmail = false
      this.correctEmail = true;
      return true
    } else {
      this.falseEmail = true;
      return false
    }
  }

  isMessageFilled() {
    if (this.contactData.message.length > 0) {
      this.falseMessage = false
      this.correctMessage = true;
      return true
    } else {
      this.falseMessage = true;
      return false
    }
  }

  resetNameInput() {
    this.falseName = false
    this.correctName = false;
  }

  resetEmailInput() {
    this.falseEmail = false
    this.correctEmail = false;
  }

  resetMessageInput() {
    this.falseMessage = false
    this.correctMessage = false;
  }


  changeImg(event: string) {
    if (event == 'over') {
      this.imgSrc = '../../assets/img/contact_form/go_up_hover.png'
    } else {
      this.imgSrc = '../../assets/img/contact_form/go_up.png';
    }
  }

  toggleCheckbox() {
    this.checked = !this.checked;
  }
}
