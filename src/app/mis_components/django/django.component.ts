import { Component } from "@angular/core";
import {DjangoService} from "../servicios/django.service";

@Component({
  selector: "app-django",
  imports: [],
  templateUrl: "./django.component.html",
  styleUrl: "./django.component.css",
})
export class DjangoComponent {
  constructor(private djangoService: DjangoService) {}

  ngOnInit(): void {
    this.djangoService.peticionDjango();
  }
}
