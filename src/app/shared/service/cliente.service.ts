import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { Clientes } from '../models/clientes.model';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  apiUrl = 'http://localhost:8080/clientes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  // Listar Clientes
  public getClientes(): Observable<Clientes> {
    return this.httpClient.get<Clientes>(this.apiUrl, this.httpOptions);
  }

  // Cadastrar Cliente
  public postCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(
      this.apiUrl,
      cliente,
      this.httpOptions
    );
  }

  // Editar Cliente
  public putCliente(cliente: Cliente): Observable<Cliente> {
    const body = { nome: cliente.nome, sobrenome: cliente.sobrenome };
    return this.httpClient.put<Cliente>(
      this.apiUrl + '/' + cliente.id,
      body,
      this.httpOptions
    );
  }

  // Deletar Cliente
  public deleteCliente(id: any): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(
      this.apiUrl + '/' + id,
      this.httpOptions
    );
  }
}
