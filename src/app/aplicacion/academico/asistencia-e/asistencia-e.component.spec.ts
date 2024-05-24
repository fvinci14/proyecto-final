import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaEComponent } from './asistencia-e.component';

describe('AsistenciaEComponent', () => {
  let component: AsistenciaEComponent;
  let fixture: ComponentFixture<AsistenciaEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsistenciaEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsistenciaEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
