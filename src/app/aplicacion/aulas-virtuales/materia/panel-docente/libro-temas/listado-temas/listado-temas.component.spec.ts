import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTemasComponent } from './listado-temas.component';

describe('ListadoTemasComponent', () => {
  let component: ListadoTemasComponent;
  let fixture: ComponentFixture<ListadoTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoTemasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
