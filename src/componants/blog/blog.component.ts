import { Component } from '@angular/core';
import { FotterComponent } from "../fotter/fotter.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FotterComponent, HeaderComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
