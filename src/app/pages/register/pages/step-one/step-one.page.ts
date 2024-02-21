import { Component, inject } from '@angular/core';
import { IonImg, IonText, IonButton, IonContent, IonToolbar, IonTitle, IonHeader } from "@ionic/angular/standalone";
import { NavigationBarComponent } from 'src/app/shared/components/navigation-bar/navigation-bar.component';
import { StepInfoComponent } from 'src/app/shared/components/step-info/step-info.component';
import { PhoneKeyboardComponent } from '../../components/phone-keyboard/phone-keyboard.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.page.html',
  styleUrls: ['./step-one.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonButton,
    IonText,
    IonImg,
    PhoneKeyboardComponent,
    StepInfoComponent,
    NavigationBarComponent],
})
export class StepOneComponent {

  private router: Router = inject(Router);
  private activeRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor() { }

  continue(): void {
    this.router.navigate(['./step-two'], { relativeTo: this.activeRoute });
  }

}
