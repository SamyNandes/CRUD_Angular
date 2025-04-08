import { Component, input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent, MatCardActions, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInputModule, MatLabel } from '@angular/material/input';
import { Usuario } from '../../entitys/user.entity';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service.service';
import { MatTableModule } from '@angular/material/table'
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
    MatTableModule
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {
  displayedColumns: string[] = ['nome','cpf','email', 'dataDeNascimento', 'id']
  inputUsuarioParaProcurar: string = ""
  dadosDoUsuarioParaMostrar: Usuario[] = []
  constructor(private service: UserService){}
  procurarDadosUsuario(){
    const users = this.service.pesquisarUsuario(this.inputUsuarioParaProcurar)
    this.dadosDoUsuarioParaMostrar = users
    console.table(this.dadosDoUsuarioParaMostrar)
  }
}
