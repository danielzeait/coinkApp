import { Component, Input, OnInit, inject } from '@angular/core';
import { ModalAnimations } from '../../services/modal';
import { IonModal, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [IonModal, IonText]
})
export class LoaderComponent {
  @Input({ required: true }) isOpen: boolean = false;
  private modalAnimations: ModalAnimations = inject(ModalAnimations);
  public enterAnimation = this.modalAnimations.enterAnimation;
  public leaveAnimation = this.modalAnimations.leaveAnimation;

  constructor() { }

}
