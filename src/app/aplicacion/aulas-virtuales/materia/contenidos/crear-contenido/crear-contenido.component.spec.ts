import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearContenidoComponent } from './crear-contenido.component';

describe('CrearContenidoComponent', () => {
  let component: CrearContenidoComponent;
  let fixture: ComponentFixture<CrearContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearContenidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
