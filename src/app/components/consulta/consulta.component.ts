import { Component, OnInit, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent, MatCardActions, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInputModule, MatLabel } from '@angular/material/input';
import { Usuario } from '../../entitys/user.entity';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service.service';
import { MatTableModule } from '@angular/material/table'
import { Router } from '@angular/router'
import { CommonModule, NgIf } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-consulta',
  imports: [
    FlexLayoutModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatInputModule,
    MatCardActions,
    MatButton,
    MatCardTitle,
    MatLabel,
    MatIcon,
    FormsModule,
    MatFormField,
    MatTableModule,
    NgIf,
    MatSnackBarModule,
    CommonModule
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit{
  constructor(
    private service: UserService,
    private router: Router
  ){}
  snack: MatSnackBar = inject(MatSnackBar)
  displayedColumns: string[] = ['nome','cpf','email', 'dataDeNascimento', 'estado', 'municipio', 'id', 'botao']
  inputUsuarioParaProcurar: string = ""
  dadosDoUsuarioParaMostrar: Usuario[] = []
  deletandoPergunta: boolean = false
  remover(id: string){
    this.service.deletarPorId(id)
    const users = this.service.pesquisarUsuario("")
    this.dadosDoUsuarioParaMostrar = users
    this.mensagem("Usuário removido com sucesso!")
  }
  prepararRemover(user: Usuario){
    this.deletandoPergunta = true
    user.deletando = true
  }
  prepararEditar(id: string) {
    this.router.navigate([ '/formulario' ], { queryParams: {"id": id}})
    }
  procurarDadosUsuario(){
    const users = this.service.pesquisarUsuario(this.inputUsuarioParaProcurar)
    this.dadosDoUsuarioParaMostrar = users
  }
  mensagem(messagem: string){
    this.snack.open(messagem, "ok", {
      duration: 2000
    })
  }
  ngOnInit(){
    const users = this.service.pesquisarUsuario("")
    this.dadosDoUsuarioParaMostrar = users
  }
}
