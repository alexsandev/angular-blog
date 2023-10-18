import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';



@NgModule({
  declarations: [
    HomeComponent,
    InfoCardComponent,
    SectionHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
