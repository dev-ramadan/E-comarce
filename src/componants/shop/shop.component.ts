import { Component, OnInit } from '@angular/core';
import { ProdactService } from '../../servise/prodact.service';
import { CommonModule } from '@angular/common';
import { AllprodactComponent } from "../allprodact/allprodact.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register} from 'swiper/element/bundle';
import { FotterComponent } from "../fotter/fotter.component";
import { HeaderComponent } from "../header/header.component";
register()

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, AllprodactComponent, FotterComponent, HeaderComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShopComponent implements OnInit{
  productShop:any=[];
  cartPtodact : any=[]
constructor(private shop:ProdactService){}
ngOnInit(): void {
  this.shope()
}
shope(){
  this.shop.getAllProducts().subscribe((res:any)=>{
    this.productShop = res;
  })
}
addTocard(event:any){
  if ('cart' in localStorage) {
    this.cartPtodact = JSON.parse(  localStorage.getItem('cart') ! );
    let test = this.cartPtodact.find((item:any) => item.item.id == event.item.id);
    if (test ) {
      alert('this prodact is already in the cart');
    }
    else {
      alert(' add sucssesfly')
       this.cartPtodact.push(event);
    localStorage.setItem('cart', JSON.stringify(this.cartPtodact));
    
    }
   
  }else{
    this.cartPtodact.push(event);
    localStorage.setItem('cart', JSON.stringify(this.cartPtodact));
  }
}
}
