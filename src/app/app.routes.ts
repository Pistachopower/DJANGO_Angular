import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import path from "path";
import { HomeComponent } from "./mis_components/home/home.component";
import { ProductosComponent } from "./mis_components/productos/productos.component";
import { DetalleComponent } from "./mis_components/detalle/detalle.component";
import { ContactoComponent } from "./mis_components/contacto/contacto.component";
import { loginGuard } from "./mis_components/guards/login.guard";
import { LoginComponent } from "./mis_components/login/login.component";
export const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [loginGuard] }, // Nueva ruta para la home
  {
    path: "productos",
    component: ProductosComponent,
    canActivate: [loginGuard],
  },
  {
    path: "detalle/:id",
    component: DetalleComponent,
    canActivate: [loginGuard],
  }, // Nueva ruta para el detalle
  { path: "login", component: LoginComponent }, // Nueva ruta para el login
  { path: "contacto", component: ContactoComponent },
];
