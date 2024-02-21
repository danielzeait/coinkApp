import { Component, Input, OnInit } from '@angular/core';
import { IonTitle, IonToolbar, IonContent, IonButton, IonText, IonImg, IonButtons, IonBackButton, IonHeader, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  standalone: true,
  imports: [IonIcon, IonHeader, IonBackButton, IonButtons, IonTitle, IonToolbar, IonContent, IonButton, IonText, IonImg],
})
export class NavigationBarComponent {

  @Input({ required: true }) title!: string;
  @Input({ required: true }) stepImage!: string;

  constructor() {
    addIcons({ chevronBackOutline });
  }

}