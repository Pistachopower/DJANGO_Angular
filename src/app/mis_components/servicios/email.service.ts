import { Injectable } from '@angular/core';
import emailjs,{EmailJSResponseStatus} from 'emailjs-com';


@Injectable({ //@Injectable: sirve para que el servicio pueda ser inyectado en otros componentes
  providedIn: 'root' //sirve para que el servicio esté disponible en toda la aplicación
})
export class EmailService {

  constructor() { }

  

  public sendEmail(formularioData: any) {

    const serviceId = 'service_euj2kzf'; //service id
    const templateId = 'template_8d9lvhu';
    const publicKey= 'AHVXW5-qXv2dlz4gY';

    return emailjs.send(serviceId, templateId, formularioData, publicKey)
   
  }
}
