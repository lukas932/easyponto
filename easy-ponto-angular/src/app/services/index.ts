import { NgModule } from '@angular/core';

import { CargoService } from './cargo.service';
import { AuthService } from './auth.service';
import { PerfilService } from './perfil.service';
import { UserService } from './user.service';
import { PontoService } from './ponto.service';

@NgModule({
  providers: [
    CargoService,
    AuthService,
    PerfilService,
    UserService,
    PontoService
  ]
})
export class ServiceModule { }
