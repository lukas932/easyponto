import { Horario } from "./horarios.model";

export interface Ponto {

    id?: number,
    user_id?: string,
    dia?: string,
    horarios?: Horario[],
    created_at?: string,
    updated_at?: string
  
}
    