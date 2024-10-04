import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../componants/header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingComponent } from '../componants/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,FontAwesomeModule,LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  isloading :boolean = true;
  constructor(){
    setTimeout(()=>{
      this.isloading = false
    },2000)
  }
}
