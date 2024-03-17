import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from './veiculo.model';
import { VeiculoResponse } from './veiculo.response';

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  private apiUrl = 'http://localhost:3001/api/veiculo';
  constructor(private http: HttpClient) {}

  getVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.apiUrl);
  }

  adicionarVeiculo(veiculo: Veiculo): Observable<VeiculoResponse> {
    return this.http.post<VeiculoResponse>(this.apiUrl, veiculo);
  }

  atualizarVeiculo(veiculo: Veiculo): Observable<Veiculo> {
    const url = `${this.apiUrl}/${veiculo.id}`;
    return this.http.put<Veiculo>(url, veiculo);
  }

  excluirVeiculo(id: number): Observable<Veiculo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Veiculo>(url);
  }
}
