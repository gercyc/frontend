import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { VeiculosComponent } from './veiculos/veiculos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, VeiculosComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
