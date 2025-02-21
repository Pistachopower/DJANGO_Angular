import { Component, OnInit  } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit  {
  
  producto: any; // Define la propiedad producto

  constructor(private route: ActivatedRoute, private servicio: ServicioService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el id del producto de la ruta
    if (id != null) {
      this.servicio.getProductoById(id).subscribe({
        next: (data) => {
          this.producto = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      console.error('ID no encontrado en la ruta');
    }
  }
}
