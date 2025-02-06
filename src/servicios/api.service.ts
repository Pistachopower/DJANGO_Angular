import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProductAll ():Observable<any>{
    return this.http.get('https://fakestoreapi.com/products');
  }

  //para un solo producto cuando le das a detalle del producto
  getSingleProduct ():Observable<any>{
    return this.http.get('https://fakestoreapi.com/products/1');
  }
}
