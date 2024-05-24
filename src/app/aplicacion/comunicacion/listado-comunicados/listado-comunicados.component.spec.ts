import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComunicadosComponent } from './listado-comunicados.component';

describe('ListadoComunicadosComponent', () => {
  let component: ListadoComunicadosComponent;
  let fixture: ComponentFixture<ListadoComunicadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoComunicadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoComunicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
