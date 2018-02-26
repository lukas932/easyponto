import { Cargo } from "./cargo.model";
import { Perfil } from "./perfil.model";

export interface User {

    id?: number,
    nome?: string,
    cpf?: string,
    email?: string,
    cargo?: Cargo,
    perfil?: Perfil,
    cargo_id?: number,
    perfil_id?: number,
    ativo?: boolean,
    created_at?: string,
    updated_at?: string

}
  