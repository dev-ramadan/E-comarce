import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProdactService {
  constructor(private http:HttpClient) { }
 
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>("https://run.mocky.io/v3/8348efe2-1978-437e-b2a2-3a276c3b13ec");
  }
  getProductsById(id:any) {
    return this.http.get('https://run.mocky.io/v3/'+id)
    
  }
}