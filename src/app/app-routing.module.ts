import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { ListaPedidoComponent } from './pedido/lista-pedido/lista-pedido.component';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';

const routes: Routes = [
  { path: 'lista-cliente', component: ListaClienteComponent },
  { path: 'lista-produto', component: ListaProdutoComponent },
  { path: 'lista-pedido', component: ListaPedidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
