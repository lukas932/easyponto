import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
    templateUrl: './colaboradores.component.html'
})

export class ColaboradoresComponent implements OnInit {

    usersList: User[];

    constructor(
        private router: Router, 
        private userService: UserService
    ) { }

    ngOnInit() {
        this.userService.show()
            .subscribe(users => {
                this.usersList = users;
            }, error => { 
                console.log(error);
            });
    }

    apagar(user: User) {
        this.userService.destroy(user.id)
            .subscribe(() => {
                this.usersList.splice(this.usersList.indexOf(user), 1);
            }, error => {
                console.log(error);
            });
    }
}