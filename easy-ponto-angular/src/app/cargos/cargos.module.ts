import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CargosRoutingModule } from './cargos-routing.module';
import { LayoutModule } from '../layout/layout.module';

import { CargosComponent } from './cargos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  imports: [
    CommonModule,
    CargosRoutingModule,
    LayoutModule,
    FormsModule
  ],
  declarations: [
    CargosComponent,
    CadastrarComponent
  ]
})
export class CargosModule { }
