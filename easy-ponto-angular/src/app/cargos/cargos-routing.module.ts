import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargosComponent } from './cargos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'cargos', component: CargosComponent, canActivate: [AuthGuard] },
  { path: 'cargos/cadastrar', component: CadastrarComponent },
  { path: 'cargos/:id/editar', component: CadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class CargosRoutingModule { }
