import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DjangoService {

  constructor(private http: HttpClient) { }

  peticionDjango() {
    //debugger
    const token = 'Q6ScRQFZptyQHfV8MpKPywH0mbywfx';

    const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
       });


    return this.http.get("https://pistacho.pythonanywhere.com/api/v1/empleados", { headers }).subscribe((datos)  => {
      console.log(datos);
    }
  )}
}


// getData(): Observable<any> {
//   const token = 1297tasdhjzxcvas123asd; // token

//   // Crear los encabezados con el token Bearer
//   const headers = new HttpHeaders({
//     Authorization: Bearer ${token}
//   });

//   // Realizar la solicitud HTTP con los encabezados
//   return this.http.get(${this.apiUrl}/data, { headers });
// }
