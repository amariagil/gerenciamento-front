import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from './veiculo';


@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  veiculoURL = 'http://localhost:8080/veiculos/';
  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Veiculo[]>{
    return this.HttpClient.get<Veiculo[]>(this.veiculoURL + 'listar');
  }

  public cadastrarVeiculo(veiculo:Veiculo): Observable<any>{
    return this.HttpClient.post<any>(this.veiculoURL + 'cadastrar', veiculo);
  }

  public listaDisponiveis(): Observable<Veiculo[]> {
    return this.HttpClient.get<Veiculo[]>(this.veiculoURL + 'disponiveis');
  }

  public removerVeiculo(id:number): Observable<any>{
    return this.HttpClient.delete<Veiculo>(this.veiculoURL + "?id="+id);
  }

}
