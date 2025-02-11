import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { 

  }

  getProductos(){
    
    return this.http.get('https://fakestoreapi.com/products');
  }
}
