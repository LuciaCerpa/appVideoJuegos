import { Component, Input } from '@angular/core';
import { VideoJuego } from 'src/app/interfaces/video-juego';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() videoJuego!: VideoJuego;
  estrellas: number[] = [];

  ngOnInit(){
    for (let i = 0; i < this.videoJuego.rating; i++) {
      this.estrellas.push(i);     
    }    
  }
}
