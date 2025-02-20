import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) {  
  }
  
  //inicializamos la variable productos, palabraFiltrada
  productos: any= [];


  //creamos una variable palabraFiltrada de tipo BehaviorSubject para guardar valores anteriores y 
  // una variable palabraFiltrada$ de tipo Observable para 
  // que los componentes puedan suscribirse (comunicarse) a ella
  private palabraFiltrada= new BehaviorSubject<string>('');
  palabraFiltrada$= this.palabraFiltrada.asObservable();

  //creamos un método updatePalabraFiltrada que recibe un string
  //para actualizar el valor de la variable palabraFiltrada
  updatePalabraFiltrada(palabra: string){
    this.palabraFiltrada.next(palabra);

  }

  getProductos(){
    return this.http.get('https://fakestoreapi.com/products');
  }
}
