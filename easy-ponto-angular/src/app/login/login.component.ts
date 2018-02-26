import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private authSevice: AuthService
    
    ) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
          email: [null, Validators.compose([Validators.required, Validators.email])],
          password: [null, Validators.required]
        });
    }

    login() {
        this.authSevice.login(this.loginForm.value)
            .subscribe((response) => {
                this.router.navigate(['dashboard']);
            },
            error => {
                console.log(error);
            });
    }
}