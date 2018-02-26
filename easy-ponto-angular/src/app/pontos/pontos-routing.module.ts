import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PontosComponent } from './pontos.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';

const routes: Routes = [
  { path: 'pontos', component: PontosComponent },
  { path: 'pontos/colaborador/:id', component: ColaboradorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class PontosRoutingModule { }
