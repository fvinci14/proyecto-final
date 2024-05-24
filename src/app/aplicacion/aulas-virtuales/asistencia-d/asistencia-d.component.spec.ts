import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaDComponent } from './asistencia-d.component';

describe('AsistenciaDComponent', () => {
  let component: AsistenciaDComponent;
  let fixture: ComponentFixture<AsistenciaDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsistenciaDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsistenciaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
