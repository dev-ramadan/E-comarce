import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartPtodact: any[] = [];
  total: any;
  chack: boolean = false;
  constructor() {}
  ngOnInit(): void {
    this.getCartProduCrt();
  }
  getCartProduCrt() {
    if ('cart' in localStorage) {
      this.cartPtodact = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getTotal();
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
  chackOut() {
    if (this.cartPtodact.length < 1) {
      alert('your cart is empty');
    }
    if (this.cartPtodact.length >= 1) {
      this.chack = true;
      setTimeout(() => {
        this.chack = false;
      }, 3000);
    }
  }
}
