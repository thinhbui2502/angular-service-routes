import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'j8U06veqxdU', song: 'Sóng Gió'},
    {id: 'xlwSPMwAqbM', song: 'Final Fantasy X-Suteki Da Ne'},
    {id: '3mNOJpN_qOQ', song: 'Melodies Of Life (OST Final Fantasy IX) - Emiko Shiratori'},
    {id: 'SrkTGC78K5c', song: 'SMITE - God Reveal - Cthulhu, The Great Dreamer'},
    {id: 'ERgrFVhL-n4', song: 'Final Fantasy VII Remake - Final Trailer | PS4'}
  ];

  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
