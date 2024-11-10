import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProdactService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://run.mocky.io/v3/5147a0dc-fa28-4688-8ad9-4fdcad4cd92e');
  }
  getProductsById(id: any) {
    return this.http.get('https://run.mocky.io/v3/' + id);
  }
}
