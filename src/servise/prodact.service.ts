import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProdactService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://run.mocky.io/v3/d7de61f6-3bb5-4448-907b-2e48c7d6d73a');
  }
  getProductsById(id: any) {
    return this.http.get('https://run.mocky.io/v3/' + id);
  }
}
