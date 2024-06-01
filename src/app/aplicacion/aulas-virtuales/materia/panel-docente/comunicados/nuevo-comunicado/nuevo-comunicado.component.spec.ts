import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoComunicadoComponent } from './nuevo-comunicado.component';

describe('NuevoComunicadoComponent', () => {
  let component: NuevoComunicadoComponent;
  let fixture: ComponentFixture<NuevoComunicadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoComunicadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevoComunicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
