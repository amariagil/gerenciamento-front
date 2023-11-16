import { ListaVeiculoComponent } from './lista-veiculo.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('ListaVeiculoComponent', () => {
  let component: ListaVeiculoComponent;
  let fixture: ComponentFixture<ListaVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
