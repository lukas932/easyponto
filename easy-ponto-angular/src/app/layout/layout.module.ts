import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterComponent,
    MenuComponent,
    NavbarMenuComponent
  ],
  exports: [
    FooterComponent,
    MenuComponent,
    NavbarMenuComponent
  ]
})
export class LayoutModule { }
