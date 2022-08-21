import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from './../shared/modules/material/material.module';
import { CadastraProdutoComponent } from './cadastra-produto/cadastra-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';

@NgModule({
  declarations: [CadastraProdutoComponent, ListaProdutoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
})
export class ProdutoModule {}