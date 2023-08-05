import { Component } from '@angular/core';
import { VideoJuego } from 'src/app/interfaces/video-juego';
import { VideoJuegosService } from 'src/app/services/video-juegos.service';

@Component({
  selector: 'app-mas-populares',
  templateUrl: './mas-populares.component.html'
})
export class MasPopularesComponent {
  constructor(private videoGamesSvc: VideoJuegosService){};

  trackByFn(index: number, item: any): string {
    return item.title;
  }
  videoJuegos: VideoJuego [] = this.videoGamesSvc.getMasPopulares();
}
