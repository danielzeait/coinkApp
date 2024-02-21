import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonText, IonButton, IonInput, IonItem, IonLabel, IonCheckbox, IonDatetime, IonModal } from "@ionic/angular/standalone";
import { FormBuilderService } from 'src/app/shared/services/form-builder';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
  standalone: true,
  providers: [FormBuilderService],
  imports: [
    IonModal, IonDatetime, IonCheckbox, CommonModule, IonLabel, IonItem,
    IonInput, IonButton, IonText, ReactiveFormsModule
  ],
})
export class TermsAndConditionsComponent {

  @Output() termsAgree = new EventEmitter<boolean>();
  private formBuilderService: FormBuilderService = inject(FormBuilderService);
  public termsForm: FormGroup = this.formBuilderService.getTermsAndConditionsForm();

  constructor() { }

  finish() {
    this.termsAgree.emit(true);
  }

}
