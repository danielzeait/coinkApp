import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import {
  IonButton, IonContent, IonDatetime, IonDatetimeButton, IonIcon, IonInput, IonItem,
  IonLabel, IonModal, IonPopover, IonSelect, IonSelectOption, IonText
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { caretDown, caretUp, eye, eyeOff, checkmark, checkmarkDone } from 'ionicons/icons';
import { ModalAnimations } from 'src/app/shared/services/modal';
import { ValidatorsService } from 'src/app/shared/services/validators';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { UtilsService } from 'src/app/shared/services/utils';
import { FormBuilderService } from 'src/app/shared/services/form-builder';
import { Store } from '@ngrx/store';
import { updateRegisterData } from 'src/app/shared/services/user.actions';
import { Observable } from 'rxjs';
import { Documents, Genders } from 'src/app/shared/services/interfaces';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  providers: [RegisterService, ValidatorsService, FormBuilderService],
  imports: [
    CommonModule, ReactiveFormsModule, ErrorMessageComponent,
    IonButton, IonContent, IonIcon, IonItem, IonSelect, IonSelectOption,
    IonDatetimeButton, IonModal, IonDatetime, IonLabel,
    IonInput, IonPopover, IonText,
  ],
  standalone: true,
})

export class RegisterFormComponent implements OnInit {

  @Output() continueNext = new EventEmitter();
  userData$?: Observable<any>;

  //Injections
  private store = inject(Store);
  private registerService: RegisterService = inject(RegisterService);
  private formBuilderService: FormBuilderService = inject(FormBuilderService);
  private modalAnimations: ModalAnimations = inject(ModalAnimations);
  private utils: UtilsService = inject(UtilsService);

  //Modal animations
  public enterAnimation = this.modalAnimations.enterAnimation;
  public leaveAnimation = this.modalAnimations.leaveAnimation;

  //Date constraints
  minDate = this.utils.getMinDate();
  maxDate = this.utils.getMaxDate();
  todayDate = this.utils.getTodayDate();

  genderOptions: Genders[] = [];
  documentOptions: Documents[] = [];
  passwordType: string = "password";
  confirmPasswordType: string = "password";
  openDocDateModal: boolean = false;
  openBirthDateModal: boolean = false;

  registerForm: FormGroup = this.formBuilderService.getRegisterForm();

  constructor() {
    addIcons({ caretDown, caretUp, eye, eyeOff, checkmark, checkmarkDone });
  }

  ngOnInit() {
    this.getGenders();
    this.getDocumentTypes();
    this.checkStorageData();
  }

  checkStorageData() {
    this.userData$ = this.store.select('userdata');
    this.userData$?.subscribe((data) => {
      if (data && !(Object.keys(data).length === 0)) {
        this.registerForm.patchValue(data);
      }
    })
  }

  togglePasswordType() {
    this.passwordType = this.passwordType === "password" ? "text" : "password";
  }

  toggleConfirmPasswordType() {
    this.confirmPasswordType = this.confirmPasswordType === "password" ? "text" : "password";
  }

  updateBdayDate(event: any) {
    if (event.target.value) {
      const newDate = event.target.value;
      const formattedString = this.utils.transformDate(newDate, 'dd/MM/yyyy');
      this.registerForm.controls["birthDate"].setValue(formattedString);
    }
  }

  updateDocumentDate(event: any) {
    if (event.target.value) {
      const newDate = event.target.value;
      const formattedString = this.utils.transformDate(newDate, 'dd/MM/yyyy');
      this.registerForm.controls["documentExpedition"].setValue(formattedString);
    }
  }

  getGenders() {
    this.registerService.getGenders().subscribe((genders: Genders[]) => {
      this.genderOptions = [...genders];
    });
  }

  getDocumentTypes() {
    this.registerService.getDocumentTypes().subscribe((documentTypes: Documents[]) => {
      this.documentOptions = [...documentTypes];
    });
  }

  completeForm() {
    this.store.dispatch(updateRegisterData(
      { registerData: this.registerForm.value }
    ));
    this.continueNext.emit();
  }
}