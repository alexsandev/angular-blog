import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { MenuBarOptionComponent } from './shared/menu-bar-option/menu-bar-option.component';
import { HomeModule } from './pages/home/home.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { ContactModule } from './pages/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuBarOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PortfolioModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
