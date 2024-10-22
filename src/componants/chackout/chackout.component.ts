import { Component, OnInit } from '@angular/core';
import { FotterComponent } from '../fotter/fotter.component';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProdactService } from '../../servise/prodact.service';

@Component({
  selector: 'app-chackout',
  standalone: true,
  imports: [
    FotterComponent,
    CommonModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './chackout.component.html',
  styleUrl: './chackout.component.css',
})
export class ChackoutComponent implements OnInit {
  chackOut: FormGroup;
  isFormSubminted = false;
  constructor(private s: FormBuilder, private http: ProdactService) {
    this.chackOut = this.s.group({
      fristName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      zip: ['', Validators.required],
      postalCode: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCartProduCrt();
  }
  cartPtodact: any[] = [];
  total: any;
  chack: boolean = false;
  copons: number = 0;
  prodact: any = [];

  onSubmint() {
    const forms = this.chackOut;
    debugger;
    this.isFormSubminted = true;
  }
  getCartProduCrt() {
    if ('cart' in localStorage) {
      this.cartPtodact = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getTotal();
    this.get();
  }
  get() {
    this.http.getAllProducts().subscribe((data: any) => {
      this.prodact = data;
    });
  }
  addAmount(index: any) {
    this.cartPtodact[index].quantity += 1;
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartPtodact));
  }
  minsAmount(index: any) {
    this.cartPtodact[index].quantity -= 1;
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartPtodact));
  }
  upLocalStorge() {
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartPtodact));
  }
  deletProduct(index: number) {
    this.cartPtodact.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartPtodact));
    this.getTotal();
  }
  getTotal() {
    this.total = 0;
    this.cartPtodact.map((item: any) => {
      this.total += item.quantity * item.item.price;
    });
  }
  copon() {
    let copon: any = document.getElementById('copon');
    let massage: any = document.querySelector('.p');
    if (copon.value == 'dragon') {
      this.copons = this.total - 100;
      massage.style.display = 'none';
    }
    if (copon.value === '') {
      massage.style.display = 'block';
    }
    copon.value = '';
  }
}
