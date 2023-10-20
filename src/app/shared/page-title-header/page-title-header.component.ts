import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title-header',
  templateUrl: './page-title-header.component.html',
  styleUrls: ['./page-title-header.component.css']
})
export class PageTitleHeaderComponent {

  @Input() title : string = "";

  constructor() { }

}
