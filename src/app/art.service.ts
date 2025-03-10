import { Injectable } from '@angular/core';
import {Art} from './models';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private arts: Art[] = [
    {
      id: 1, name: 'Example1',
      image: '/egg.jpg',
      description: 'I boarded on an artistic journey inspired by the unmistakable style of Hearthstone. Hope you like it!'
    },
    {
      id: 2, name: 'Example2',
      image: '/druid.jpg',
      description: 'I boarded on an artistic journey inspired by the unmistakable style of Hearthstone. Hope you like it!'
    },
    {
      id: 3, name: 'Example3',
      image: '/potion.jpg',
      description: 'I boarded on an artistic journey inspired by the unmistakable style of Hearthstone. Hope you like it!'
    },{
      id: 4, name: 'Example4',
      image: '/shaman.jpg',
      description: 'I boarded on an artistic journey inspired by the unmistakable style of Hearthstone. Hope you like it!'
    },
  ];


  getArts(): Art[] {
    return this.arts;
  }

  constructor() { }
}
