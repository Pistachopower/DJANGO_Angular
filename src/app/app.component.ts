import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../components/home/home.component";
import { DetallesProductoComponent } from '../components/detalles-producto/detalles-producto.component';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HomeComponent,DetallesProductoComponent],
})
export class AppComponent {
  title = 'angApp_v19';
}
