import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProdactService {
  constructor(private http:HttpClient) { }
 
  getAllProducts(){
    return this.http.get("https://run.mocky.io/v3/78742ced-545a-4be2-a4dc-fbe292e6b5d8");
  }
  getProductsById(id:any) {
    return this.http.get('https://run.mocky.io/v3/'+id)
    
  }
}