import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, WritableSignal, effect, inject, signal } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonText, IonButton, IonIcon } from "@ionic/angular/standalone";
import { RegisterService } from '../../services/register.service';
import { addIcons } from 'ionicons';
import { backspaceOutline, checkmarkCircle } from 'ionicons/icons';
import { Key, UserInterface } from 'src/app/shared/services/interfaces';
import { Store } from '@ngrx/store';
import { setPhoneNumber } from 'src/app/shared/services/user.actions';



@Component({
  selector: 'app-phone-keyboard',
  templateUrl: './phone-keyboard.component.html',
  styleUrls: ['./phone-keyboard.component.scss'],
  providers:[RegisterService],
  imports:[IonGrid,IonRow,IonCol,IonText,CommonModule,IonButton,IonIcon],
  standalone: true,
})
export class PhoneKeyboardComponent {
  
  private store = inject(Store);
  private registerService : RegisterService = inject(RegisterService);
  public  phonePlaceholder: string | number = '(XXX - XXXXXX)';
  public  phoneNumber = signal<number[]>([]);
  public  keyBoard:Array<Key> = this.registerService.getKeyBoard();

  @Output() continueNext = new EventEmitter();
  
  constructor() {
    addIcons({
      backspaceOutline, 
      checkmarkCircle
    });
  }

  addPhoneDigits(value: number) {
    if(this.phoneNumber().length < 10){
      this.phoneNumber.update((digits) => [...digits, value]);
    } 
  }

  deletePhoneDigits(){
    if(this.phoneNumber().length > 0){
      this.phoneNumber.update((digits:number[]) => digits.slice(0, digits.length - 1));
    }
  }

  complete(){
    this.store.dispatch(setPhoneNumber(
      { phoneNumber: this.phoneNumber().join('') }
    ));
    this.continueNext.emit();
  }

}

