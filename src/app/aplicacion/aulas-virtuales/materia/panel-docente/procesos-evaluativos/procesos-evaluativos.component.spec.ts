import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosEvaluativosComponent } from './procesos-evaluativos.component';

describe('ProcesosEvaluativosComponent', () => {
  let component: ProcesosEvaluativosComponent;
  let fixture: ComponentFixture<ProcesosEvaluativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcesosEvaluativosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcesosEvaluativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
