import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { CommonModule } from '@angular/common'; //esto se usa para pasar mis valores a la template de html de productos
import { ActivatedRoute } from '@angular/router'; // Para obtener el ID del producto de la URL

@Component({
  selector: 'app-detalles-producto',
  imports: [],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})

export class DetallesProductoComponent implements OnInit {

  ngOnInit(): void {

  }
}
