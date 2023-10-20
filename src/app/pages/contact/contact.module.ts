import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { PageTitleHeaderComponent } from 'src/app/shared/page-title-header/page-title-header.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';


@NgModule({
    declarations: [
        ContactComponent,
        PageTitleHeaderComponent,
        ContactCardComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class ContactModule { }
