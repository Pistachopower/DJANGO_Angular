import { Routes } from '@angular/router';
import { ProductoComponent } from '../components/producto/producto.component';
import { DetallesProductoComponent } from '../components/detalles-producto/detalles-producto.component';
import { HomeComponent } from '../components/home/home.component';
import { AppComponent } from './app.component';



export const routes: Routes = [
    //esto es como una url
    {path:"", component:AppComponent},
    {path:"hola", component:ProductoComponent},
    // {path:"producto", component:ProductoComponent},
    {path:"detallesproducto", component:DetallesProductoComponent},
    {path:"home", component:HomeComponent},

];
