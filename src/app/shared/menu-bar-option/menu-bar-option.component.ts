import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar-option',
  templateUrl: './menu-bar-option.component.html',
  styleUrls: ['./menu-bar-option.component.css']
})
export class MenuBarOptionComponent {

  @Input() textContent: string = "";
  @Input() target: string | null = null;
  optionColor : string = "";

  constructor() { }

  changeColor() {
    this.optionColor = (this.optionColor == "") ? "highlight" : "";
  }
}
