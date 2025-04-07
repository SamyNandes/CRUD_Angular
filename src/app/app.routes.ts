import { Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "formulario", component: FormularioComponent },
  { path: "consulta", component: ConsultaComponent }
];
