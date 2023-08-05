import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  constructor(
    private formBuilder: FormBuilder,
    private usuariosSvc: UsuariosService,
    private router: Router
  ) {}
  formRegistro: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    passwordC: ['', [Validators.required]],
  });
  usuario!: any[];

  registro() {
    if (this.formRegistro.valid) {
      this.usuario = this.usuariosSvc
        .getUsuarios()
        .filter(
          (usuario) =>
            usuario.email == this.formRegistro.controls['email'].value
        );

      if (this.usuario.length > 0) {
        Swal.fire({
          title: 'Error!',
          text: 'El correo ingresado ya existe, intente con un correo diferente!',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
        return;
      } else {
        if (
          this.formRegistro.controls['password'].value !==
          this.formRegistro.controls['passwordC'].value
        ) {
          Swal.fire({
            title: 'Error!',
            text: 'Las contraseñas no coinciden!',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
          return;
        } else {
          this.usuariosSvc.addUser(this.formRegistro.value as Usuario);
          Swal.fire({
            title: 'En hora buena!',
            text: 'El usuario se ha registrado correctamente',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this.router.navigate(['/inicio-sesion']);
        }
      }
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Ingrese todos los datos solicitados!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }
  }
}
