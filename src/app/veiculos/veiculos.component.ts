import { Component, ChangeDetectorRef } from '@angular/core';
import { VeiculoService } from './veiculo.service';
import { CommonModule } from '@angular/common';
import { Veiculo } from './veiculo.model';
import { FormsModule } from '@angular/forms';
import { VeiculoResponse } from './veiculo.response';

@Component({
  selector: 'app-veiculos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.css',
})
export class VeiculosComponent {
  veiculos: Veiculo[] = [];
  novoVeiculo: Veiculo = new Veiculo();
  display = 'none';
  veiculoResponse: VeiculoResponse = new VeiculoResponse();
  constructor(
    private veiculoService: VeiculoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.carregarVeiculos();
  }

  carregarVeiculos(): void {
    this.veiculoService
      .getVeiculos()
      .subscribe((veiculos) => (this.veiculos = veiculos));
  }

  adicionarVeiculo(): void {
    console.log(this.novoVeiculo.id);
    if (!this.novoVeiculo.id) {
      this.veiculoService
        .adicionarVeiculo(this.novoVeiculo)
        .subscribe((veiculoResponse) => {
          this.veiculos.push(veiculoResponse.veiculo);
        });
    } else {
      this.veiculoService
        .atualizarVeiculo(this.novoVeiculo)
        .subscribe((veiculo) => {
          const index = this.veiculos.findIndex((v) => v.id == veiculo.id);
          this.veiculos[index] = veiculo;
        });
    }
  }

  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
    this.novoVeiculo = new Veiculo();
  }

  verDetalhes(veiculo: Veiculo) {
    this.novoVeiculo = veiculo;
    this.openModal();
  }

  editarVeiculo(veiculo: Veiculo) {}

  excluirVeiculo(veiculo: Veiculo) {
    const index = this.veiculos.findIndex((v) => v.id == veiculo.id);
    this.veiculoService.excluirVeiculo(veiculo.id).subscribe((veiculo) => {
      this.veiculos.splice(index, 1);
    });
  }
}
