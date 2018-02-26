import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CargoService } from '../../services/cargo.service';
import { Cargo } from '../../models/cargo.model';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html'
})
export class CadastrarComponent implements OnInit {

  msgSuccess: boolean = false;
  msgError: boolean = false;
  cargo: Cargo = {};

  constructor(
    private cargoService: CargoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.cargoService.find(+params['id'])
          .subscribe(data => this.cargo = data);
      }
    });
  }

  salvar() {
    this.cargoService.save(this.cargo)
      .subscribe(() => {
        this.msgSuccess = true;
      }, error => {
        this.msgError = true;
      });
  }

}
