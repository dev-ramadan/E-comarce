import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgwWowService } from 'ngx-wow';



@Component({
  selector: 'app-allprodact',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './allprodact.component.html',
  styleUrl: './allprodact.component.css'
})
export class AllprodactComponent {
@Input() myData:any = {}
@Output() myProdact = new EventEmitter()
addButton : boolean = false
quantity : number = 0 ;
constructor(private wowService: NgwWowService) { 
  this.wowService.init();

}
add(){
  this.myProdact.emit({item : this.myData, quantity : this.quantity});
}

alert(){
  this.addButton = false
}
}
