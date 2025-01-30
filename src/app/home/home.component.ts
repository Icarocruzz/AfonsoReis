import { Component } from '@angular/core';
import {ArtService} from '../art.service';
import {Art} from '../models';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  arts: Art[] = [];
  selectArt: Art | null = null;
  lightboxOpen: boolean = false;


  constructor(private artService: ArtService) { }

  ngOnInit(): void {
    this.arts = this.artService.getArts()
  }

  openLightBox(art: Art) {
    this.selectArt = art;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
  }


}
