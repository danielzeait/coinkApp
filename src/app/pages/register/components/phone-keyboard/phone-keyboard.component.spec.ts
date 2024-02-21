import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneKeyboardComponent } from './phone-keyboard.component';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PhoneKeyboardComponent', () => {
  let component: PhoneKeyboardComponent;
  let fixture: ComponentFixture<PhoneKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [PhoneKeyboardComponent,HttpClientTestingModule],
        providers: [
          provideMockStore({})
        ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

