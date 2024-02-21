import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetStartedComponent } from './get-started.page';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';


describe('GetStartedComponent', () => {
  let component: GetStartedComponent;
  let fixture: ComponentFixture<GetStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [GetStartedComponent,RouterTestingModule],
        providers: [
          provideMockStore({}),
        ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
