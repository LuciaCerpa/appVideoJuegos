import { Component } from '@angular/core';
import { VideoJuego } from 'src/app/interfaces/video-juego';
import { VideoJuegosService } from 'src/app/services/video-juegos.service';

@Component({
  selector: 'app-mas-descargados',
  templateUrl: './mas-descargados.component.html'
})
export class MasDescargadosComponent {
  constructor(private videoGamesSvc: VideoJuegosService){};
  trackByFn(index: number, item: any): string {
    return item.title;
  }
  videoJuegos: VideoJuego [] = this.videoGamesSvc.getMasDescargados(); 
}
