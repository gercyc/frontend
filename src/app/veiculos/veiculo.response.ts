import { Veiculo } from './veiculo.model';

export class VeiculoResponse {
  message: string;
  veiculo: Veiculo;

  constructor(message?: string, veiculo?: Veiculo) {
    this.message = message || '';
    this.veiculo = veiculo || new Veiculo();
  }
}
