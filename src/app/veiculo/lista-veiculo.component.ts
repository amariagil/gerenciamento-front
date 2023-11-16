
import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/veiculo/veiculo';
import { VeiculoService } from 'src/app/veiculo/veiculo.service';

import { state, style, trigger } from '@angular/animations';




@Component({
  providers: [VeiculoService],
  selector: 'app-lista-veiculo',
  templateUrl: './lista-veiculo.component.html',
  styleUrls: ['./lista-veiculo.component.scss'],
  animations: [
    trigger('nomeDaAnimacao', [
      state('done', style({})),
    ]),
  ]

})
export class ListaVeiculoComponent implements OnInit {
  veiculos: Veiculo[] = [];
  veiculo: Veiculo = new Veiculo;
  carregando:boolean = true;
  reservaConfirmada: boolean = false;

  constructor(private veiculoService: VeiculoService){}


  ngOnInit() {
    this.listarVeiculos();

  }
  apagarVeiculo(i:number){
    this.veiculos.splice(i,1);
  }



  listarVeiculos() {
    this.veiculoService.lista().subscribe(
      data =>{
        this.veiculos = data;
    console.log(data)},
      error => {
        console.log(error);
      })
}
cadastrarVeiculo(): void{
  this.carregando = true;
  this.veiculoService.cadastrarVeiculo(this.veiculo).subscribe(
    data => {
      alert("Veiculo inserido com sucesso!");
      this.limpar();

    },
    error => {
      this.carregando = false;
      alert("Erro ao salvar um veiculo!");
      console.log(error);
    }
  )
}


  removerVeiculo(id: number): void {
    this.carregando = true;
    if(id != null){
      this.veiculoService.removerVeiculo(id).subscribe(
        data => {
          alert("Veiculo removido com sucesso");

        },
        error => {
        this.carregando = false;
          alert("Erro ao apagar um veiculo!");
          console.log(error);
      }
      )
    }

  }

  limpar(): void{
    this.carregando = false;
    this.veiculo = new Veiculo;
  }



  listarVeiculosDisponiveis(): void {
    this.veiculoService.listaDisponiveis().subscribe(veiculos => {
      this.veiculos = veiculos;
    });
  }

}
