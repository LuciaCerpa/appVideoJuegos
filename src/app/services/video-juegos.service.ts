import { Injectable } from '@angular/core';
import { VideoJuego } from '../interfaces/video-juego';

@Injectable({
  providedIn: 'root'
})
export class VideoJuegosService {

  constructor() { }

  videoGames: any[] = [
    {
      title: 'The Legend of Zelda: Breath of the Wild',
      description: 'An action-adventure game where you explore the vast kingdom of Hyrule.',
      releaseDate: 'March 3, 2017',
      image: './assets/img/zelda.jpg',
      rating: 1,
      downloads: 185,
      comingSoon: true,
    },
    {
      title: 'Cyberpunk 2077',
      description: 'A role-playing game set in a dystopian future world of Night City.',
      releaseDate: 'December 10, 2020',
      image: './assets/img/cyberpunk.jpg',
      rating: 4,
      downloads: 80,
      comingSoon: false,
    },
    {
      title: 'Super Mario Odyssey',
      description: 'An iconic platformer featuring Mario on a journey to save Princess Peach.',
      releaseDate: 'October 27, 2017',
      image: './assets/img/mario.jpg',
      rating: 5,
      downloads: 120,
      comingSoon: false,
    },
    {
      title: 'Assassin\'s Creed Valhalla',
      description: 'An action role-playing game in which you play as a Viking in the age of Vikings.',
      releaseDate: 'November 10, 2020',
      image: './assets/img/assassinscreed.jpg',
      rating: 4,
      downloads: 190,
      comingSoon: true,
    },
    {
      title: 'Red Dead Redemption 2',
      description: 'A Western-themed action-adventure game set in the late 1800s.',
      releaseDate: 'October 26, 2018',
      image: './assets/img/reddeadredemption2.jpg',
      rating: 5,
      downloads: 750,
      comingSoon: false,
    },
    {
      title: 'Minecraft',
      description: 'A sandbox game that allows players to build and explore blocky worlds.',
      releaseDate: 'November 18, 2011',
      image: './assets/img/minecraft.jpg',
      rating: 5,
      downloads: 200,
      comingSoon: false,
    },
    {
      title: 'God of War',
      description: 'An action-adventure game following the journey of Kratos, the Spartan warrior.',
      releaseDate: 'April 20, 2018',
      image: './assets/img/godofwar.jpg',
      rating: 5,
      downloads: 70,
      comingSoon: false,
    },
    {
      title: 'Fortnite',
      description: 'A battle royale game where players fight to be the last one standing.',
      releaseDate: 'July 25, 2017',
      image: './assets/img/fortnite.jpg',
      rating: 2,
      downloads: 150,
      comingSoon: true,
    },
    {
      title: 'Grand Theft Auto V',
      description: 'An open-world action-adventure game set in the fictional city of Los Santos.',
      releaseDate: 'September 17, 2013',
      image: './assets/img/gta5.jpg',
      rating: 3,
      downloads: 130,
      comingSoon: true,
    },
    {
      title: 'Overwatch',
      description: 'A team-based multiplayer first-person shooter with diverse heroes.',
      releaseDate: 'May 24, 2016',
      image: './assets/img/overwatch.jpg',
      rating: 5,
      downloads: 400,
      comingSoon: false,
    },
    {
      title: 'The Witcher 3: Wild Hunt',
      description: 'An action role-playing game with an open-world fantasy setting.',
      releaseDate: 'May 19, 2015',
      image: './assets/img/witcher3.jpg',
      rating: 5,
      downloads: 250,
      comingSoon: false,
    },
    {
      title: 'Super Smash Bros. Ultimate',
      description: 'A crossover fighting game featuring various video game characters.',
      releaseDate: 'December 7, 2018',
      image: './assets/img/smashbros.jpg',
      rating: 5,
      downloads: 80,
      comingSoon: false,
    },
    {
      title: 'Call of Duty: Modern Warfare',
      description: 'A first-person shooter that reimagines the classic Modern Warfare series.',
      releaseDate: 'October 25, 2019',
      image: './assets/img/codmw.jpg',
      rating: 1,
      downloads: 20,
      comingSoon: true,
    },
    {
      title: 'Animal Crossing: New Horizons',
      description: 'A life simulation game where you build and customize your own island paradise.',
      releaseDate: 'March 20, 2020',
      image: './assets/img/animalcrossing.jpg',
      rating: 5,
      downloads: 95,
      comingSoon: false,
    },
    {
      title: 'FIFA 21',
      description: 'A sports simulation game featuring realistic football gameplay.',
      releaseDate: 'October 9, 2020',
      image: './assets/img/fifa21.jpg',
      rating: 4,
      downloads: 80,
      comingSoon: true,
    },
    {
      title: 'Pokémon Sword and Shield',
      description: 'A role-playing game where you become a Pokémon Trainer on a new adventure.',
      releaseDate: 'November 15, 2019',
      image: './assets/img/pokemon.jpg',
      rating: 4,
      downloads: 210,
      comingSoon: false,
    },
    {
      title: 'Apex Legends',
      description: 'A free-to-play battle royale game with unique hero abilities.',
      releaseDate: 'February 4, 2019',
      image: './assets/img/apexlegends.jpg',
      rating: 2,
      downloads: 30,
      comingSoon: true,
    }
  ];
  
  getMasPopulares(){
    return this.videoGames.filter(game => game.rating > 4)
  }

  getMasDescargados(){
    return this.videoGames.filter(game => game.downloads > 100)
      }

  getProximamente(){
    return this.videoGames.filter(game => game.comingSoon)
  }

  addVideoJuego(videoJuego: VideoJuego){
    this.videoGames.push(videoJuego)
  }
}
