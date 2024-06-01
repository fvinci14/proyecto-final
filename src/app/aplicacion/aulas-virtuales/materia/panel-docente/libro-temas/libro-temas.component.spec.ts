import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroTemasComponent } from './libro-temas.component';

describe('LibroTemasComponent', () => {
  let component: LibroTemasComponent;
  let fixture: ComponentFixture<LibroTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroTemasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibroTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
