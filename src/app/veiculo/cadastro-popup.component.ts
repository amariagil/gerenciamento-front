import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { VeiculoService } from './veiculo.service';
import { Router } from '@angular/router';
import { Veiculo } from './veiculo';

@Component({
  selector: 'app-cadastro-popup',
  templateUrl: './cadastro-popup.component.html',
  styleUrls: ['./cadastro-popup.component.scss']
})
export class CadastroPopupComponent implements OnInit {
  id: number = 0;
  modelo: string = '';
  marca: string = '';
  cor: string = '';
  ano_fabricacao: number = 0;
  placa: string = '';
  reservado: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<CadastroPopupComponent>,
    private veiculoService: VeiculoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitForm() {
    let veiculo: Veiculo = {
      id: this.id,
      modelo: this.modelo,
      marca: this.marca,
      cor: this.cor,
      ano_fabricacao: this.ano_fabricacao,
      placa: this.placa,
      reservado: this.reservado
    };

    this.veiculoService.cadastrarVeiculo(veiculo).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    );

    this.dialogRef.close();
  }

  fecharPopup() {
    this.dialogRef.close();
  }
}
