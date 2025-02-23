import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

//Un guard es una función que decide si un usuario puede acceder a un componente

// En este caso, el guard verifica si el usuario está logueado antes de permitir el acceso al componente de login
export const loginGuard: CanActivateFn = (route, state) => {
  //inyectamos el router para redireccionar al login en caso de no estar logueado
  const router = inject(Router);

  const token = localStorage.getItem("token");

  if (token) {
    //si el usuario está logueado, permitimos el acceso al componente
    return true;
  } else {
    //si el usuario no está logueado, redireccionamos al login
    router.navigate(["/login"]);
    return false;
  }
};
