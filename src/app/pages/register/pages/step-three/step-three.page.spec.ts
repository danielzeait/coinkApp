import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepThreeComponent } from './step-three.page';
import { provideMockStore } from '@ngrx/store/testing';

describe('StepThreeComponent', () => {
  let component: StepThreeComponent;
  let fixture: ComponentFixture<StepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [StepThreeComponent],
        providers: [
          provideMockStore({})
        ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
