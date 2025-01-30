import { Injectable } from '@angular/core';
import {Art} from './models';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private arts: Art[] = [
    {
      id: 1, tittle: 'Example1',
      imageUrl: '/egg.jpg',
      description: 'I boarded on an artistic journey inspired by the unmistakable style of Hearthstone. Hope you like it!'
    },
    {
      id: 2, tittle: 'Example2',
      imageUrl: '/druid.jpg',
      description: 'I boarded on an artistic journey inspired by the unmistakable style of Hearthstone. Hope you like it!'
    },
    {
      id: 3, tittle: 'Example3',
      imageUrl: '/potion.jpg',
      description: 'I boarded on an artistic journey inspired by the unmistakable style of Hearthstone. Hope you like it!'
    },{
      id: 4, tittle: 'Example4',
      imageUrl: '/shaman.jpg',
      description: 'I boarded on an artistic journey inspired by the unmistakable style of Hearthstone. Hope you like it!'
    },
  ];


  getArts(): Art[] {
    return this.arts;
  }

  constructor() { }
}
