import { NgxTypedJsModule } from 'ngx-typed-js';
import { Component, inject, OnInit } from '@angular/core';
import { ProdactService } from '../../servise/prodact.service';
import { CommonModule } from '@angular/common';
import { AllprodactComponent } from '../allprodact/allprodact.component';
import { RouterLink } from '@angular/router';
import { FotterComponent } from '../fotter/fotter.component';
import { HeaderComponent } from '../header/header.component';
import Swiper from 'swiper';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgxTypedJsModule,
    AllprodactComponent,
    RouterLink,
    FotterComponent,
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  prodact: any = [];
  prodact2: any = [];
  prodact3: any = [];
  cartPtodact: any = [];
  private toast = inject(NgToastService);

  constructor(private http: ProdactService) {}
  ngOnInit(): void {
    this.getprodact();
    this.getprodact2();
    this.initSwiper();
    this.getAllprodact();
  }
  getAllprodact() {
    this.http.getAllProducts().subscribe((res: any) => {
      this.prodact3 = res.slice(4, 16);
    });
  }
  getprodact() {
    this.http.getAllProducts().subscribe((res: any) => {
      this.prodact = res.slice(0, 8);
    });
  }
  getprodact2() {
    this.http.getAllProducts().subscribe((res: any) => {
      this.prodact2 = res.slice(8, 16);
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

  initSwiper() {
    const swiper = new Swiper('.swiper', {
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
    });
  }
}
