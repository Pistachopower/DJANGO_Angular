import { Component } from "@angular/core";
import { LoginService } from "../servicios/login.service";

@Component({
  selector: "app-login",
  imports: [],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  constructor(private servicioLogin: LoginService) {}

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.servicioLogin.login(username, password);
  }
}
