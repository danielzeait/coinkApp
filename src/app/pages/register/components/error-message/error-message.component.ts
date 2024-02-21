import { Component, Input, OnInit } from '@angular/core';
import { IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  standalone:true,
  imports: [
    IonText
  ]
})
export class ErrorMessageComponent  {

  @Input({required: true}) errorText!: string;

}
