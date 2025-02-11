import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './mis_components/home/home.component';
import { ProductosComponent } from './mis_components/productos/productos.component';


export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "productos", component: ProductosComponent },

];
