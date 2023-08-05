import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { VideoJuego } from 'src/app/interfaces/video-juego';
import { VideoJuegosService } from 'src/app/services/video-juegos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-juego',
  templateUrl: './agregar-juego.component.html',
  styleUrls: ['./agregar-juego.component.css'],
})
export class AgregarJuegoComponent {
  constructor(
    private formBuilder: FormBuilder,
    private videoJuegoSvc: VideoJuegosService,
    private router: Router
  ) {}

  formAgregarVideoJuego: FormGroup = this.formBuilder.group({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    releaseDate: new FormControl('', Validators.required),
    image: new FormControl(''),
    rating: new FormControl('', Validators.required),
    downloads: new FormControl('', Validators.required),
    comingSoon: new FormControl(''),
  });

  agregarVideoJuego() {
    if (this.formAgregarVideoJuego.valid) {
      this.videoJuegoSvc.addVideoJuego(
        this.formAgregarVideoJuego.value as VideoJuego
      );
      Swal.fire({
        title: 'En hora buena',
        text: 'El juego se ha agregado correctamente',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      this.router.navigate(['/home/masPopulares']);
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Favor de ingresar todos los datos solicitados!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }
}
