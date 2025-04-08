import { Injectable } from '@angular/core';
import { Usuario } from '../entitys/user.entity';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static _REPO_CLIENTES = '_CLIENTES'
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  salvarUsuario(Cliente: Usuario){
    const repositorio = this.retornarUsuarios()
    repositorio.push(Cliente)

    localStorage.setItem(UserService._REPO_CLIENTES, JSON.stringify(repositorio))
  }
  pesquisarUsuario(nome: string): Usuario[]{
    const listaUsuarios = this.retornarUsuarios()
    if(nome == ""){
      return listaUsuarios
    }
    const listaDeUsuariosEncontrados: Usuario[] = listaUsuarios.filter(x => x.nome?.indexOf(nome) !== -1 )
    return listaDeUsuariosEncontrados
  }
  retornarUsuarioPorId(id: string): Usuario | undefined {
    const usuarios = this.retornarUsuarios()
    const user = usuarios.find(x => x.id == id ) || undefined
    return user
  }
  private retornarUsuarios(): Usuario[] {
    if (isPlatformBrowser(this.platformId)) {
    let repositorioClientes = localStorage.getItem(UserService._REPO_CLIENTES)
    if(repositorioClientes){
      const usuarios: Usuario[] = JSON.parse(repositorioClientes)
      return usuarios
    }
    const clientes: Usuario[] = []
    localStorage.setItem(UserService._REPO_CLIENTES, JSON.stringify(clientes))
    return clientes;
  } else {
    return [];
  }
}
}
