import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlickCarouselModule} from 'ngx-slick-carousel';


@Component({
  selector: 'app-work',
  imports: [
    SlickCarouselModule, CommonModule
  ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  images = [
    '/druid.jpg',
    '/egg.jpg',
    '/potion.jpg',
    '/druid.jpg',
    '/egg.jpg',
    '/potion.jpg',
    '/druid.jpg',
    '/egg.jpg',
    '/potion.jpg',
    '/druid.jpg'
  ];

  selectedImage: string | null = null;

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }


}
