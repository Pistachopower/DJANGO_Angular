import { Component, OnInit } from "@angular/core";
import { ServicioService } from "../servicios/servicio.service";
import { CommonModule } from "@angular/common";


@Component({
  selector: "app-productos",
  imports: [CommonModule], //para las directivas de ngIf y ngFor
  templateUrl: "./productos.component.html",
  styleUrl: "./productos.component.css",
})
export class ProductosComponent implements OnInit {
  productos: any= [];

  constructor(private servicio: ServicioService) {}

  ngOnInit(): void {
    this.servicio.getProductos().subscribe({
      next: (data) => {

        this.productos = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }


  
}
