import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { PontoService } from '../services/ponto.service';
import { Ponto } from '../models/ponto.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pontos',
  templateUrl: './pontos.component.html'
})
export class PontosComponent {

  pontos: Ponto[];
  detalhes = [];
  users: User[];
  form: FormGroup;

  constructor(
    private pontoService: PontoService,
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { 
    this.form = this.formBuilder.group({
      'search': ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  buscar() {
    this.userService.findByName(this.form.value.search)
      .subscribe(users => {
        this.users = users;
      }, error => {
        console.log(error);
      });
  }

  showDetalhes(dia, ponto) {
    ponto.latitude = Number(ponto.latitude);
    ponto.longitude = Number(ponto.longitude);
    ponto.dia = dia;
    this.detalhes = ponto;
  }

}
