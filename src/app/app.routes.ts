import { Routes } from '@angular/router';
import { ProductoComponent } from '../components/producto/producto.component';
import { DetallesProductoComponent } from '../components/detalles-producto/detalles-producto.component';
import { HomeComponent } from '../components/home/home.component';



export const routes: Routes = [
    //esto es como una url
    {path:"", component:ProductoComponent},
    {path:"detallesproducto", component:DetallesProductoComponent},
    {path:"home", component:HomeComponent},

];
