import { Component } from '@angular/core';
import { VideoJuego } from 'src/app/interfaces/video-juego';
import { VideoJuegosService } from 'src/app/services/video-juegos.service';

@Component({
  selector: 'app-proximamente',
  templateUrl: './proximamente.component.html'
  })
export class ProximamenteComponent {
  constructor(private videoGamesSvc: VideoJuegosService){};

  trackByFn(index: number, item: any): string {
    return item.title;
  }
  videoJuegos: VideoJuego [] = this.videoGamesSvc.getProximamente();
}
