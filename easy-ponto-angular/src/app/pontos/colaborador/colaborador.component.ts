import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PontoService } from '../../services/ponto.service';
import { Ponto } from '../../models/ponto.model';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-pontos',
  templateUrl: './colaborador.component.html'
})
export class ColaboradorComponent implements OnInit {

  pontos: Ponto[];
  user: User;
  detalhes = [];

    constructor(
        private pontoService: PontoService,
        private route: ActivatedRoute,
        private userService: UserService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if (params.hasOwnProperty('id')) {
          this.userService.find(+params['id'])
            .subscribe((user) => {
              console.log(user);
              this.user = user;
            }, error => {
              console.log(error);
            });
          this.pontoService.find(+params['id'])
            .subscribe((pontos) => {
              this.pontos = pontos;
            }, error => {
              console.log(error);
            });
        }
      });
  }

  showDetalhes(dia, ponto) {
    ponto.latitude = Number(ponto.latitude);
    ponto.longitude = Number(ponto.longitude);
    ponto.dia = dia;
    this.detalhes = ponto;
  }

}
