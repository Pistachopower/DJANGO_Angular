import { Component } from "@angular/core";
import { ServicioService } from "../servicios/servicio.service";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-header",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  //llamamos a la clase ServicioService con todas sus propiedades y métodos
  constructor(private servicio: ServicioService, private router: Router, private route: ActivatedRoute) {
    
  }

  
  
  buscar(event: Event, texto: string) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    //console.log(texto);

    this.servicio.updatePalabraFiltrada(texto);

    //para mandarme a la ruta /productos si no estoy en ella
    if(this.router.url != '/productos'){
      this.router.navigate(['/productos']);
    }

  }
}
