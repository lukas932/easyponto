import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { PontosRoutingModule } from './pontos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';

import { PontosComponent } from './pontos.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';

@NgModule({
  imports: [
    CommonModule,
    PontosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    AgmCoreModule.forRoot({
      // clientId: 'gme-bbmapfre',
      apiKey: 'AIzaSyB_k0r25q2ooog4H29qgLi9TpMwVpJ4wKQ'
    })
  ],
  declarations: [
    PontosComponent,
    ColaboradorComponent
  ]
})
export class PontosModule { }
