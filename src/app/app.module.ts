import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTitleComponent } from './pages/home/components/home-title/home-title.component';
import { HomeComponent } from './pages/home/home.component';
import { SmallCardComponent } from './shared/small-card/small-card.component';
import { LargeCardComponent } from './shared/large-card/large-card.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { MenuBarOptionComponent } from './shared/menu-bar-option/menu-bar-option.component';
import { PageTitleHeaderComponent } from './shared/page-title-header/page-title-header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactCardComponent } from './pages/contact/components/contact-card/contact-card.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectCardComponent } from './pages/portfolio/components/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    MenuBarOptionComponent,
    PageTitleHeaderComponent,
    SmallCardComponent,
    LargeCardComponent,
    HomeTitleComponent,
    ContactComponent,
    ContactCardComponent,
    PortfolioComponent,
    ProjectCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
