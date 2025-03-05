import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DjangoService {

  constructor(private http: HttpClient) { }

  private apiUrl = "https://pistacho.pythonanywhere.com/api/v1/empleados";
  private token = 'Q6ScRQFZptyQHfV8MpKPywH0mbywfx';

  // peticionDjango() {
  //   //debugger
  //   const token = 'Q6ScRQFZptyQHfV8MpKPywH0mbywfx';

  //   const headers = new HttpHeaders({
  //       Authorization: 'Bearer ' + token
  //      });


  //   return this.http.get("https://pistacho.pythonanywhere.com/api/v1/empleados", { headers }).subscribe((datos)  => {
  //     console.log(datos);
  //   }
  // )}

  peticionDjango(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token
    });

    return this.http.get(this.apiUrl, { headers });
  }


}

