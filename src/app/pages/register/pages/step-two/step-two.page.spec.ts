import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepTwoComponent } from './step-two.page';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StepTwoComponent', () => {
  let component: StepTwoComponent;
  let fixture: ComponentFixture<StepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [StepTwoComponent,RouterTestingModule, HttpClientTestingModule],
        providers: [
          provideMockStore({})
        ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
