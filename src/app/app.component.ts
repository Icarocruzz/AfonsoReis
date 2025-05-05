import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {BannerComponent} from './components/banner/banner.component';
import {WorkComponent} from './components/work/work.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {SketchsComponent} from './components/sketchs/sketchs.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BannerComponent, WorkComponent, AboutComponent, ContactComponent, SketchsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AfonsoP';
}
