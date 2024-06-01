import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoProcesoComponent } from './nuevo-proceso.component';

describe('NuevoProcesoComponent', () => {
  let component: NuevoProcesoComponent;
  let fixture: ComponentFixture<NuevoProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoProcesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevoProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
