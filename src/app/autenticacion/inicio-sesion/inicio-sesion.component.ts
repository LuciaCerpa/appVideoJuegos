import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  constructor(private formBuilder: FormBuilder, private router: Router, private usuarioSvc: UsuariosService) { }
  usuario!: any[];  
  formInicioSesion = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)
  });

  iniciarSesion(){
    this.usuario = this.usuarioSvc.getUsuarios().filter(usuario => usuario.email == this.formInicioSesion.controls['email'].value);
   
    if (this.usuario.length > 0 ) {
      if (this.usuario[0].password == this.formInicioSesion.controls['password'].value) {
        localStorage.setItem('isLogged', JSON.stringify(true))
        this.usuarioSvc.setUserA(this.usuario[0]);
        Swal.fire({
          title: `Bienvenid@ <br> ${this.usuario[0].nombre}`,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.router.navigate(['/home/masPopulares']);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'La contraseña NO es correcta!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    } else {
      localStorage.clear()
      Swal.fire({
        title: 'Error!',
        text: 'El usuario NO existe!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }    
  }
}
