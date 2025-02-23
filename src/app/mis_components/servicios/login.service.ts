import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; //esto me sirve para hacer peticiones http

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  // Función para hacer login en la API.
  // Le pasamos como parámetros el nombre de usuario y la contraseña.
  login(username: string, password: string) {
    // Creamos un objeto plano en lugar de convertirlo a string
    const userData = {
      username: username,
      password: password
    };

    // Aquí hacemos la petición POST a la API de login con los datos de usuario y contraseña.
    // Despues, nos suscribimos (escuchamos la comunicación[listener]) a los resultados.
    this.http.post("https://fakestoreapi.com/auth/login", userData).subscribe({
      next: (response) => {
        console.log("Login correcto", response);
        // Aquí podríamos guardar el token en el local storage o en alguna cookie para mantener la sesión activa.
        localStorage.setItem("", JSON.stringify(response));
      },
      error: (error) => console.error("Error en el login", error),
    });
  }
}
