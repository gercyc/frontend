import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { BrowserModule } from '@angular/platform-browser'
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'veiculos', component: VeiculosComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule, CommonModule, ReactiveFormsModule],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
