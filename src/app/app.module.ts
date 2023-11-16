import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaVeiculoComponent } from './veiculo/lista-veiculo.component';
import { CadastroVeiculoComponent } from './veiculo/cadastro-veiculo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSlideToggleModule,_MatSlideToggleRequiredValidatorModule} from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CadastroPopupComponent } from './veiculo/cadastro-popup.component';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormGroup, FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListaVeiculoComponent,
    CadastroVeiculoComponent,
    CadastroPopupComponent,


  ],
  imports: [

    ReactiveFormsModule,
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatToolbarModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    _MatSlideToggleRequiredValidatorModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
