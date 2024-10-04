import { Component } from '@angular/core';
import { FotterComponent } from "../fotter/fotter.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FotterComponent, HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
