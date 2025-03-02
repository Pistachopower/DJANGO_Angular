import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DjangoService {

  constructor(private http: HttpClient) { }

  peticionDjango() {
    debugger
    const token = '8qmTvt9IQ3h3tuDjPBjQbyMNEfRvk7';

    const headers = new HttpHeaders({
        Authorization: 'Bearer' + token
       });


    return this.http.get("http://localhost:8080/api/v1/pedidos-lista/", { headers }).subscribe((datos)  => {
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
