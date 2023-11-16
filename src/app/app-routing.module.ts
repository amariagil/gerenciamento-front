import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVeiculoComponent } from './veiculo/lista-veiculo.component';
import { CadastroVeiculoComponent } from './veiculo/cadastro-veiculo.component';


const routes: Routes = [
  {path: '',component: ListaVeiculoComponent},
  {path: 'novo',component:CadastroVeiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
