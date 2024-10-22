import { Component, OnInit } from '@angular/core';
import { AllprodactComponent } from '../allprodact/allprodact.component';
import { CommonModule } from '@angular/common';
import { FotterComponent } from "../fotter/fotter.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AllprodactComponent, CommonModule, FotterComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
}
