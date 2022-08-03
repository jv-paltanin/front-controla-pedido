import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from '../../shared/service/cliente.service';

@Component({
  selector: 'app-cadastra-cliente',
  templateUrl: './cadastra-cliente.component.html',
  styleUrls: ['./cadastra-cliente.component.scss'],
})
export class CadastraClienteComponent implements OnInit {
  public clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: ClienteService,
    public dialogAdd: MatDialogRef<CadastraClienteComponent>
  ) {}

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      cpf: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
    });
  }

  createClient() {
    this.rest.postCliente(this.clienteForm.value).subscribe((result) => {});
    this.closeModal();
  }

  closeModal(): void {
    this.dialogAdd.close();
    this.clienteForm.reset();
  }
}