import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulasVirtualesComponent } from './aulas-virtuales.component';

describe('AulasVirtualesComponent', () => {
  let component: AulasVirtualesComponent;
  let fixture: ComponentFixture<AulasVirtualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AulasVirtualesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AulasVirtualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
