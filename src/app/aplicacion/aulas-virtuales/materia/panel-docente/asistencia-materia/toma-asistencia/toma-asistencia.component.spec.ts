import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaAsistenciaComponent } from './toma-asistencia.component';

describe('TomaAsistenciaComponent', () => {
  let component: TomaAsistenciaComponent;
  let fixture: ComponentFixture<TomaAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TomaAsistenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TomaAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
