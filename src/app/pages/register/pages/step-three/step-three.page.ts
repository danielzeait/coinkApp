import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar, IonContent, IonButton, IonText, IonImg, IonModal, IonDatetime } from '@ionic/angular/standalone';
import { NavigationBarComponent } from 'src/app/shared/components/navigation-bar/navigation-bar.component';
import { StepInfoComponent } from 'src/app/shared/components/step-info/step-info.component';
import { TermsAndConditionsComponent } from '../../components/terms-and-conditions/terms-and-conditions.component';
import { ModalAnimations } from 'src/app/shared/services/modal';
import { WelcomeCardComponent } from "../../components/welcome-card/welcome-card.component";
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.page.html',
  styleUrls: ['./step-three.page.scss'],
  standalone: true,
  imports: [IonDatetime, IonModal,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonButton,
    IonText,
    IonImg,
    StepInfoComponent,
    NavigationBarComponent,
    TermsAndConditionsComponent, WelcomeCardComponent]
})
export class StepThreeComponent {

  //Injections
  private modalAnimations: ModalAnimations = inject(ModalAnimations);
  private router: Router = inject(Router);
  private store = inject(Store);
  private loaderService: LoaderService = inject(LoaderService);

  // Modal animations
  public enterAnimation = this.modalAnimations.enterAnimation;
  public leaveAnimation = this.modalAnimations.leaveAnimation;

  userData$?: Observable<any>;
  canDismiss: boolean = false;
  openFinishModal: boolean = false;
  registerDone: boolean = false;
  saveFinalData: boolean = false;

  constructor() { }

  finishRegister() {
    this.saveFinalData = true;
    this.retrieveFinalData();
  }

  retrieveFinalData() {
    this.userData$ = this.store.select('userdata');
    this.userData$?.subscribe((data) => {
      if (data && !(Object.keys(data).length === 0) && this.saveFinalData) {
        this.loaderService.displayLoader.emit(true);
        setTimeout(() => {
          console.log('Datos del usuario registrado ', data);
          this.loaderService.displayLoader.emit(false);
          this.saveFinalData = false;
          this.openFinishModal = true;
        }, 2000);
      }
    })
  }

  resetFlow() {
    this.router.navigate(['./get-started']);
    this.canDismiss = true;
    this.openFinishModal = false;
    this.registerDone = true;
  }

}
