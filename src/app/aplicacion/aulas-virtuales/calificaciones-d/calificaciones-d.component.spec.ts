import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesDComponent } from './calificaciones-d.component';

describe('CalificacionesDComponent', () => {
  let component: CalificacionesDComponent;
  let fixture: ComponentFixture<CalificacionesDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalificacionesDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalificacionesDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
