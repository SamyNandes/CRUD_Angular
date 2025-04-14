import { Injectable } from '@angular/core';
import { Estado } from '../entitys/estado.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Municipio } from '../entitys/municipio.class'
import { MatSelectChange } from '@angular/material/select';

@Injectable({
  providedIn: 'root'
})
export class BrasilAPIService {

  constructor(private http: HttpClient) { }

  listarTodosOsMunicipios(UF: MatSelectChange): Observable<Municipio[]> {
    return this.http.get<Municipio[]>("https://brasilapi.com.br/api/ibge/municipios/v1/" +  UF.value)
  }
  listarTodasAsUfs(): Observable<Estado[]>{
    return this.http.get<Estado[]>("https://brasilapi.com.br/api/ibge/uf/v1")
  }
}
