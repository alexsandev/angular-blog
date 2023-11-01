import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  floatingMenu : boolean = false
  innerWidth: any

  constructor() { }
  
  ngOnInit() {
      this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 425) {
      this.floatingMenu = false
    }
  }

  openMenu() {
    this.floatingMenu = (this.floatingMenu == false) ? true : false;
  }
}
