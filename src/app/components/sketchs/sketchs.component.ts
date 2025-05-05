import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-sketchs',
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './sketchs.component.html',
  styleUrl: './sketchs.component.css'
})
export class SketchsComponent {
  images = [
   '/sketch-placeholder1.jpg',
    '/sketch-placeholder2.jpg',
    '/sketch-placeholder1.jpg',
    '/sketch-placeholder2.jpg',
  ];

  selectedImage: string | null = null;

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
