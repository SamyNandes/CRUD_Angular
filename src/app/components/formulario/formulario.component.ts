import { Component } from '@angular/core';
import { MatFormField } from "@angular/material/form-field"
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatCardActions } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'
import { Usuario } from '../../entitys/user.entity';
import { UserService } from '../../services/user.service.service';
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
    MatButtonModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  usuario: Usuario = Usuario.salvarUser()
  constructor(private service: UserService){}

  cadastrarUsuario(){
    this.service.salvarUsuario(this.usuario)
    console.log(this.usuario)
}
}
