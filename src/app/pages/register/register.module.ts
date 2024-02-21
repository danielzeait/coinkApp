import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StepOneComponent } from './pages/step-one/step-one.page';
import { StepTwoComponent } from './pages/step-two/step-two.page';
import { StepThreeComponent } from './pages/step-three/step-three.page';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: StepOneComponent },
            { path: 'step-one', component: StepOneComponent },
            { path: 'step-two', component: StepTwoComponent },
            { path: 'step-three', component: StepThreeComponent },
        ])
    ],
})

export class RegisterModule { }