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

  slides =[
    {img: "/druid.jpg"},
    {img: "/egg.jpg"},
    {img: "/potion.jpg"},
    {img: "/shaman.jpg"},
    {img: "/potion.jpg"},
    {img: "/egg.jpg"},
    {img: "/druid.jpg"},
    {img: "/shaman.jpg"},
    {img: "/potion.jpg"},
    {img: "/egg.jpg"},
  ]

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    infinite: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 128,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
}
