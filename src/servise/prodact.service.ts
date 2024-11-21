import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProdactService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://run.mocky.io/v3/688017de-70e5-4b05-9d89-a2aed8286cf7');
  }
  getProductsById(id: any) {
    return this.http.get('https://run.mocky.io/v3/'+id);
  }
}
