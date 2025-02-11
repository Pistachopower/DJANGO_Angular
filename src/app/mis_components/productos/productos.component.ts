import { Component, OnInit } from "@angular/core";
import { ServicioService } from "../servicios/servicio.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-productos",
  imports: [CommonModule], //para las directivas de ngIf y ngFor
  templateUrl: "./productos.component.html",
  styleUrl: "./productos.component.css",
})
export class ProductosComponent {
  productos: any = [];
  filtro: string = "";

  //llamamos a la clase ServicioService con todas sus propiedades y métodos
  constructor(private servicio: ServicioService) {
    //nos suscribimos a la variable palabraFiltrada$ para que cuando
    //cambie el valor de la variable palabraFiltrada se ejecute el método
    //filtrarProductos
    this.servicio.palabraFiltrada$.subscribe((palabra) => {
      this.filtro = palabra;
      this.filtrarProductos(palabra);
      console.log(palabra);
    });
  }

  ngOnInit(): void {
    this.servicio.getProductos().subscribe({
      next: (data) => {
        this.servicio.productos = data;
        console.log(this.servicio.productos);
        this.productos = data;

        if (this.filtro != "") {
          this.filtrarProductos(this.filtro);
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  //método para filtrar productos
  filtrarProductos(palabra: string) {
    console.log(palabra);
    if (palabra != "") {
      this.productos = this.servicio.productos.filter((producto: any) => {
        return producto.title.toLowerCase().includes(palabra.toLowerCase());
      });
    }
  }
}
