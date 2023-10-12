import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { MenuBarOptionComponent } from './shared/menu-bar-option/menu-bar-option.component';
import { SectionHeaderComponent } from './shared/section-header/section-header.component';
import { InfoCardComponent } from './shared/info-card/info-card.component';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoCardComponent,
    MenuBarComponent,
    MenuBarOptionComponent,
    SectionHeaderComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
