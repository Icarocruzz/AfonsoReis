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
    }
  ];

  getArts(): Art[] {
    return this.arts;
  }

  constructor() { }
}
