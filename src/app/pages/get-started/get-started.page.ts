import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent, IonButton, IonText, IonImg, IonHeader, IonTitle, IonToolbar } from "@ionic/angular/standalone";
import { Store } from '@ngrx/store';
import { resetUserData } from '../../shared/services/user.actions';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [
    IonToolbar, 
    IonTitle, 
    IonHeader, 
    IonImg,  
    IonText, 
    IonButton, 
    IonContent, 
    CommonModule,
    RouterModule
  ],
  templateUrl:'./get-started.page.html',
  styleUrl: './get-started.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class GetStartedComponent { 

    private store = inject(Store);

    constructor(){
    }
    
    resetData(){
      this.store.dispatch(resetUserData());
    }

}
