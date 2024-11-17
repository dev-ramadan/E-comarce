import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProdactService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://run.mocky.io/v3/cca6ef3a-3d09-4aee-9d6c-8feb7699640c');
  }
  getProductsById(id: any) {
    return this.http.get('https://run.mocky.io/v3/' + id);
  }
}
