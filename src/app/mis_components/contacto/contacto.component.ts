import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { EmailService } from "../servicios/email.service";
import { CommonModule } from "@angular/common";

declare var bootstrap: any;

@Component({
  selector: "app-contacto",
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./contacto.component.html",
  styleUrl: "./contacto.component.css",
})
export class ContactoComponent {
  formulario!: FormGroup; //variable formulario de tipo FormGroup. Se inicializa con un valor indefinido (!)
  enviado: boolean = false; //para saber si el formulario fue enviado

  //inyectamos el servicio FormBuilder y EmailService
  //FormBuilder: para crear formularios reactivos
  //EmailService: para enviar correos electrónicos
  
  constructor(private fb: FormBuilder, private servicio: EmailService) {
    //inicializamos un formulario con tres campos: nombre, email
    this.formulario = this.fb.group({
      //cada campo se valida con Validators.required (son obligatorios) y
      // Validators.email (para comprobar que el formato es correcto)
      nombre: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      email: ["", [Validators.required, Validators.email]],
      mensaje: ["", Validators.required],
    });
  }

  enviarMensaje() {
    console.log(this.formulario.value);

    if (this.enviado === true) {
      //sirve para que no se envíe el formulario más de una vez
      return;
    }

    if (this.formulario.valid) {
      // Convertir el email a minúsculas
      const formValue = this.formulario.value;
      formValue.email = formValue.email.toLowerCase();
      formValue.nombre = formValue.nombre.toLowerCase();

      this.enviado = true; //se cambia a true para que no se envíe más de una vez

      this.servicio.sendEmail(this.formulario.value).then(
        (result: any) => {
          console.log(result.text);

          const toastElement = document.getElementById("liveToast"); //esto es para el mensaje de éxito
          const toast = new bootstrap.Toast(toastElement);

          if (result.status === 200) {
            this.formulario.reset(); //los datos del formulario se borrar
            toast.show(); //muestra el toast
            this.enviado = false;
          }
        },
        (error: any) => {
          console.log(error.text);
        }
      );
    } else {
      // Acceder a los errores de los controles del formulario
      const nombreErrors = this.formulario.get("nombre")?.errors;
      const emailErrors = this.formulario.get("email")?.errors;
      const mensajeErrors = this.formulario.get("mensaje")?.errors;

      console.log("Errores en el campo nombre:", nombreErrors);
      console.log("Errores en el campo email:", emailErrors);
      console.log("Errores en el campo mensaje:", mensajeErrors);
    }
  }
}
