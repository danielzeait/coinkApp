import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepOneComponent } from './step-one.page';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StepOneComponent', () => {
  let component: StepOneComponent;
  let fixture: ComponentFixture<StepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [StepOneComponent,RouterTestingModule, HttpClientTestingModule],
        providers: [
          provideMockStore({})
        ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
