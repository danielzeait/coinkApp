import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonThumbnail, IonText, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-step-info',
  templateUrl: './step-info.component.html',
  styleUrls: ['./step-info.component.scss'],
  standalone: true,
  imports: [IonIcon, IonText, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonThumbnail],
})
export class StepInfoComponent {

  @Input() stepTitle!: string;
  @Input({ required: true }) stepInfo!: string;
  @Input({ required: true }) stepImg!: string;
  @Input() stepStrongInfo!: string;

}
