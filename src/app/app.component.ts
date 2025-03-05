import { Component } from "@angular/core";

import { RouterOutlet } from "@angular/router";

import { DjangoComponent } from "./mis_components/django/django.component";

@Component({
  selector: "app-root",

  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [DjangoComponent],
})
export class AppComponent {
  title = "angApp_v19";
}
