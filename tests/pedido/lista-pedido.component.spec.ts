import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaPedidoComponent } from '../../src/app/pedido/lista-pedido/lista-pedido.component';

describe('ListaPedidoComponent', () => {
  let component: ListaPedidoComponent;
  let fixture: ComponentFixture<ListaPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPedidoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});