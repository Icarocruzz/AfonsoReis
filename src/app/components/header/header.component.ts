import { Component } from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuValue: boolean = false;
  menu_icon: string = 'bi bi-list'

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(section: string) {
    this.closeMenu();
    this.viewportScroller.scrollToAnchor(section);
  }


  openMenu() {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }

  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }

  protected readonly scroll = scroll;
}
