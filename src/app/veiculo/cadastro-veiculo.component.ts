
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VeiculoService } from './veiculo.service';
import { Veiculo } from './veiculo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.scss']
})
export class CadastroVeiculoComponent implements OnInit {



  constructor(
    private formulario: FormGroup,
    private formBuilder: FormBuilder,
    private veiculoService: VeiculoService,
    private router: Router,
    private matsnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<CadastroVeiculoComponent>,

  ) { }
  modelo = '';
  marca = '';
  cor = '';
  ano_fabricacao: number = 0;
  placa = '';
  reservado = false;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      modelo: [''],
      marca: ['',],
      cor: [''],
      anoFabricacao: [''],
      placa: [''],
      reservado: [false]
    });
  }

  Mensagem(message: string, action: string) {
    this.matsnackBar.open(message, action, {
      duration: 2000,
    });
  }

  onCreate(): void {
    if (this.formulario.valid) {
      const veiculo = this.formulario.value;

      this.veiculoService.cadastrarVeiculo(veiculo).subscribe(
        data => {
          this.Mensagem('Veículo criado com sucesso', 'Fechar');
          this.router.navigate(['/']);
        },
        error => {
            this.Mensagem('Erro de validação', 'Fechar');

        }

        );
  }



  }

  submitForm() {

    this.dialogRef.close();
  }

  fecharPopup() {
    this.dialogRef.close();

}
}

