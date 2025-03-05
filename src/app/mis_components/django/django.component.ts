import { Component, OnInit  } from "@angular/core";
import {DjangoService} from "../servicios/django.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-django",
  imports: [CommonModule],
  templateUrl: "./django.component.html",
  styleUrl: "./django.component.css",
})
export class DjangoComponent implements OnInit{
  empleados: any = [];

  constructor(private djangoService: DjangoService) {}

  // ngOnInit(): void {
  //   this.djangoService.peticionDjango();
  // }

  ngOnInit(): void {
    this.djangoService.peticionDjango().subscribe({
      next: (respuesta: any) => {
        this.empleados = respuesta;
        console.log("Datos recibidos:", this.empleados);
      },
      error: (err) => console.error("Error en la petición:", err),
    });
  }
}
