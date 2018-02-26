import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColaboradoresComponent } from './colaboradores.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

const routes: Routes = [
  { path: 'colaboradores', component: ColaboradoresComponent },
  { path: 'colaboradores/cadastrar', component: CadastrarComponent },
  { path: 'colaboradores/:id/editar', component: CadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ColaboradoresRoutingModule { }
