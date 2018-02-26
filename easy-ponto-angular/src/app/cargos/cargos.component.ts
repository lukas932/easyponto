import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CargoService } from '../services/cargo.service';
import { Cargo } from '../models/cargo.model';

@Component({
    templateUrl: './cargos.component.html'
})

export class CargosComponent implements OnInit {

    cargoList: Cargo[];

    constructor(
        private router: Router,
        private cargoService: CargoService
    ) { }

    ngOnInit() {
        this.cargoService.show()
            .subscribe((cargos) => {
                this.cargoList = cargos;
            },
            error => {
                console.log(error)
            }
        )
    }

    apagar(cargo: Cargo) {
        this.cargoService.destroy(cargo.id)
            .subscribe(() => {
                this.cargoList.splice(this.cargoList.indexOf(cargo), 1);
            }, error => {
                console.log(error);
            });
    }
}