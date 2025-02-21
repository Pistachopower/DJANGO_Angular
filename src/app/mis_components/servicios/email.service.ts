import { Injectable } from '@angular/core';
import emailjs,{EmailJSResponseStatus} from 'emailjs-com';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  

  public sendEmail(formularioData: any) {

    const serviceId = 'service_euj2kzf'; //service id
    const templateId = 'template_8d9lvhu';
    const publicKey= 'ikc-uaiZ8zvoCRnFs';

    return emailjs.send(serviceId, templateId, formularioData, publicKey)
   
  }
}
