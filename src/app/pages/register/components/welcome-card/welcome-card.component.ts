import { Component, EventEmitter, Output } from '@angular/core';
import { IonText, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss'],
  standalone: true,
  imports: [
    IonText,
    IonButton
  ]
})
export class WelcomeCardComponent {

  @Output() modalClose = new EventEmitter<boolean>()

  constructor() { }

  closeModal() {
    this.modalClose.emit(true);
  }

}
