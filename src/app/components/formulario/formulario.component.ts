import { Component, OnInit, inject } from '@angular/core';
import { MatFormField } from "@angular/material/form-field"
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatCardActions } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'
import { Usuario } from '../../entitys/user.entity';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service.service';
import { CommonModule, NgIf } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

@Component({
  selector: 'app-formulario',
  imports: [
    FlexLayoutModule,
    MatFormField,
    MatCardContent ,
    MatCardHeader,
    MatIcon,
    MatCard,
    MatCardTitle,
    MatInputModule,
    MatCardActions,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatSnackBarModule,
    NgxMaskDirective,
    CommonModule
  ],
  providers: [
    provideNgxMask()
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit{
  usuario: Usuario = Usuario.salvarUser()
  snack: MatSnackBar = inject(MatSnackBar);
  constructor(
    private service: UserService,
    private routeActivated: ActivatedRoute,
    private router: Router,
  ){}
  atualizando: Boolean = false
  cadastrarUsuario(){
    this.service.salvarUsuario(this.usuario)
    this.usuario = Usuario.salvarUser()
    this.snack.open('Cadastro concluido!', 'ok', {
      duration: 2000
    })
}
  alterarUsuario(){
    this.service.alterarUsuario(this.usuario)
  }
ngOnInit(): void {
    this.routeActivated.queryParamMap.subscribe((x: any) => {
      const query = x['params']
      const id = query['id']
      const user = this.service.retornarUsuarioPorId(id)
      if(user){
        this.atualizando = true
        this.usuario = user
      }
    })
}
}
