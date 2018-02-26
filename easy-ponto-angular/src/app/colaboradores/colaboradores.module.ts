import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { LayoutModule } from '../layout/layout.module';

import { ColaboradoresComponent } from './colaboradores.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  imports: [
    CommonModule,
    ColaboradoresRoutingModule,
    LayoutModule,
    FormsModule
  ],
  declarations: [
    ColaboradoresComponent,
    CadastrarComponent
  ]
})
export class ColaboradoresModule { }
