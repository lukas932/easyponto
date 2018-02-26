import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Perfil } from '../models/perfil.model';

@Injectable()
export class PerfilService {

    constructor(private http: HttpClient) { }

    show() {
        return this.http
            .get<Perfil[]>(`${environment.apiEndpoint}/perfis`);
    }

}

