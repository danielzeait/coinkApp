import { Component, inject } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar, IonContent, IonButton, IonText, IonImg } from '@ionic/angular/standalone';
import { NavigationBarComponent } from 'src/app/shared/components/navigation-bar/navigation-bar.component';
import { StepInfoComponent } from 'src/app/shared/components/step-info/step-info.component';
import { PhoneKeyboardComponent } from '../../components/phone-keyboard/phone-keyboard.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.page.html',
  styleUrls: ['./step-two.page.scss'],
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
    RegisterFormComponent,
    NavigationBarComponent],
})
export class StepTwoComponent {


  private router: Router = inject(Router);
  private activeRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor() { }

  continue() {
    this.router.navigate(['../step-three'], { relativeTo: this.activeRoute });
  }

}
