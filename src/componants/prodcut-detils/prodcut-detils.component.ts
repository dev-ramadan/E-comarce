import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdactService } from '../../servise/prodact.service';
import { CommonModule } from '@angular/common';
import { AllprodactComponent } from '../allprodact/allprodact.component';
import { AboutComponent } from '../about/about.component';
import { FotterComponent } from '../fotter/fotter.component';
import { HeaderComponent } from '../header/header.component';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-prodcut-detils',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    AllprodactComponent,
    AboutComponent,
    FotterComponent,
    HeaderComponent,
  ],
  templateUrl: './prodcut-detils.component.html',
  styleUrl: './prodcut-detils.component.css',
})
export class ProdcutDetilsComponent implements OnInit {
  id: any;
  data: any = {};
  recomend: any = [];
  cartPtodact: any[] = [];
  private toast = inject(NgToastService);
  constructor(private routes: ActivatedRoute, private servise: ProdactService) {
    this.id = this.routes.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getprodact();
    this.recomendProduct();
  }
  getprodact() {
    this.servise.getProductsById(this.id).subscribe((res: any) => {
      this.data = res;
    });
  }
  recomendProduct() {
    this.servise.getAllProducts().subscribe((res: any) => {
      this.recomend = res.slice(0, 4);
    });
  }
  addTocard(event: any) {
    if ('cart' in localStorage) {
      this.cartPtodact = JSON.parse(localStorage.getItem('cart')!);
      let test = this.cartPtodact.find(
        (item: any) => item.item.id == event.item.id
      );
      if (test) {
        this.toast.info('This product is already in the cart', 'info', 5000);
      } else {
        this.toast.success('Add successfuly', 'SUCCESS', 5000);
        this.cartPtodact.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartPtodact));
      }
    } else {
      this.cartPtodact.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartPtodact));
    }
  }
  slide() {
    const slide = document.getElementById('MainImg');
    slide?.addEventListener('click', () => {
      alert('welcome');
    });
  }
}
