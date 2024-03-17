export class Veiculo {
  id: number;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: number;

  constructor(
    id?: number,
    placa?: string,
    chassi?: string,
    renavam?: string,
    modelo?: string,
    marca?: string,
    ano?: number
  ) {
    this.id = id || 0;
    this.placa = placa || '';
    this.chassi = chassi || '';
    this.renavam = renavam || '';
    this.modelo = modelo || '';
    this.marca = marca || '';
    this.ano = ano || 0;
  }
}
