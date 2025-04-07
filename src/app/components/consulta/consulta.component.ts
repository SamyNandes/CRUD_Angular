import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent, MatCardActions, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInputModule, MatLabel } from '@angular/material/input';

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
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {

}
