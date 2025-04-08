import { Injectable } from '@angular/core';
import { Usuario } from '../entitys/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static _REPO_CLIENTES = '_CLIENTES'
  constructor() { }

  salvarUsuario(Cliente: Usuario){
    const repositorio = this.retornarUsuarios()
    repositorio.push(Cliente)

    localStorage.setItem(UserService._REPO_CLIENTES, JSON.stringify(repositorio))
    localStorage.setItem("teste", "testecaraio")
    console.log(repositorio)
  }
  pesquisarUsuario(nome: string): Usuario[]{
    const listaUsuarios = this.retornarUsuarios()
    const listaDeUsuariosEncontrados: Usuario[] = listaUsuarios.filter(x => x.nome?.indexOf(nome) !== -1 )
    return listaDeUsuariosEncontrados
  }
  private retornarUsuarios(): Usuario[] {
    let repositorioClientes = localStorage.getItem(UserService._REPO_CLIENTES)
    if(repositorioClientes){
      const usuarios: Usuario[] = JSON.parse(repositorioClientes)
      return usuarios
    }
    const clientes: Usuario[] = []
    localStorage.setItem(UserService._REPO_CLIENTES, JSON.stringify(clientes))
    return clientes;
  };
}
