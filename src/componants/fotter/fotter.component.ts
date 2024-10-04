import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-fotter',
  standalone: true,
  imports: [],
  templateUrl: './fotter.component.html',
  styleUrl: './fotter.component.css'
})
export class FotterComponent {
constructor (private wow: NgwWowService) {
  this.wow.init();
}

}
