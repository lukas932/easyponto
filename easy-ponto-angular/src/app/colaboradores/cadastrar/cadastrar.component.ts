import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CargoService } from '../../services/cargo.service';
import { PerfilService } from '../../services/perfil.service';
import { UserService } from '../../services/user.service';

import { Cargo } from '../../models/cargo.model';
import { Perfil } from '../../models/perfil.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html'
})
export class CadastrarComponent implements OnInit {

  cargosList: Cargo[];
  perfisList: Perfil[];
  msgSuccess: boolean = false;
  msgError: boolean = false;

  user: User = {};

  constructor(
    private cargoService: CargoService, 
    private perfilService: PerfilService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.userService.find(+params['id'])
          .subscribe(data => this.user = data);
      }
    });
    this.getCargos();
    this.getPerfis();
  }

  salvar() {
    this.userService.save(this.user)
      .subscribe(() => {
        this.msgSuccess = true;
      }, error => {
        this.msgError = true;
      });
  }

  getCargos() {
    this.cargoService.show()
      .subscribe((cargos) => {
        this.cargosList = cargos;
      },
      error => {
        console.log(error)
      });
  }

  getPerfis() {
    this.perfilService.show()
      .subscribe((perfis) => {
        this.perfisList = perfis;
      },
      error => {
        console.log(error)
      });
  }

}
