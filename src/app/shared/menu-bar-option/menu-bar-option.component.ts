import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar-option',
  templateUrl: './menu-bar-option.component.html',
  styleUrls: ['./menu-bar-option.component.css']
})
export class MenuBarOptionComponent {

  @Input() textContent: string = "";
  @Input() target: string = "";
  optionColor: string | null = null;

  constructor() { }

  optionChangeColor(){
    this.optionColor = (this.optionColor == null) ? "option__mouseenter" : null;
  }
}
