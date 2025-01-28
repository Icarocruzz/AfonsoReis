import { Component } from '@angular/core';
import {ArtService} from '../art.service';
import {Art} from '../models';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ArtService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  arts: Art[] = [];
  constructor(private artService: ArtService) { }

  ngOnInit(): void {
    this.arts = this.artService.getArts()
  }

}
