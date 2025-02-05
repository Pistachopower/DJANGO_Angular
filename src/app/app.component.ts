import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../components/home/home.component";

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HomeComponent],
})
export class AppComponent {
  title = 'angApp_v19';
}
