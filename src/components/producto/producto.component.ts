import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { CommonModule } from '@angular/common'; //esto se usa para pasar mis valores a la template de html de productos

interface Producto{
  id:number,
  title: string,
  price: number,
  category:string,
  description: string,
  image:string
}

@Component({
  selector: 'app-producto',
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})


export class ProductoComponent implements OnInit {
  public productos: Producto[] = [];

  
  //se inicializa el servicio de la api. Se pone privado porque apiservice solamente se va a usar en este componente
  constructor(private apiService: ApiService) { 
  }

  ngOnInit(): void{
    //console.log("hola");

    //iniciamos la petición a la api para obtener los productos
    this.apiService.getProductAll().subscribe(
      (productos: Producto[]) => {
        this.productos = productos;

      }, 
    );
    console.log(this.productos);
  }

}
