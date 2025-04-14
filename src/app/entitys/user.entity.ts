import { v4 as uuid } from 'uuid'

export class Usuario {
  nome?: string;
  cpf?: string;
  email?: string;
  dataDeNascimento?: Date;
  id?: string;
  estado?: string;
  municipio?: string;
  deletando?: boolean = false;
  static salvarUser(){
    const usuario = new Usuario();
    usuario.id = uuid();
    return usuario;
  }
}
