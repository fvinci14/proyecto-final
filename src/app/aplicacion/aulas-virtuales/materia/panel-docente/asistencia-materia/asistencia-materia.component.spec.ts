import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaMateriaComponent } from './asistencia-materia.component';

describe('AsistenciaMateriaComponent', () => {
  let component: AsistenciaMateriaComponent;
  let fixture: ComponentFixture<AsistenciaMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsistenciaMateriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsistenciaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
