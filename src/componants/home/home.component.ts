import { NgxTypedJsModule } from 'ngx-typed-js';
import { Component, OnInit } from '@angular/core';
import { ProdactService } from '../../servise/prodact.service';
import { CommonModule } from '@angular/common';
import { AllprodactComponent } from "../allprodact/allprodact.component";
import { RouterLink } from '@angular/router';
import { FotterComponent } from "../fotter/fotter.component";
import { HeaderComponent } from "../header/header.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule, AllprodactComponent, RouterLink, FotterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
prodact:any=[];
prodact2:any=[];
cartPtodact:any=[];

constructor(private http:ProdactService){
}
ngOnInit(): void {
  this.getprodact()
  this.getprodact2()
}
getprodact(){
  this.http.getAllProducts().subscribe((res:any)=>{
    this.prodact=res.slice( 0,8);
  })
};
getprodact2(){
  this.http.getAllProducts().subscribe((res:any)=>{
    this.prodact2=res.slice(8,16);
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
