import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoEnClaseComponent } from './trabajo-en-clase.component';

describe('TrabajoEnClaseComponent', () => {
  let component: TrabajoEnClaseComponent;
  let fixture: ComponentFixture<TrabajoEnClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrabajoEnClaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrabajoEnClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
