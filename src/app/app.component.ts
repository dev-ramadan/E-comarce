import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../componants/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingComponent } from '../componants/loading/loading.component';
import { NgToastModule } from 'ng-angular-popup'; // to be added
import { ToasterPosition } from 'ng-angular-popup';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FontAwesomeModule,
    LoadingComponent,
    NgToastModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';
  ToasterPosition = ToasterPosition;
  isloading: boolean = true;
  constructor() {
    setTimeout(() => {
      this.isloading = false;
    }, 2000);
  }
}
