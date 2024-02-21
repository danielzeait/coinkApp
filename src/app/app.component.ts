import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { LoaderService } from './shared/services/loader.service';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [CommonModule, IonApp, IonRouterOutlet, LoaderComponent],
})
export class AppComponent implements OnInit {

  loaderService: LoaderService = inject(LoaderService);

  public showLoader: boolean = false;
  ngOnInit(): void {
    this.loaderService.displayLoader.subscribe((value) => {
      this.showLoader = value;
    })
  }
}