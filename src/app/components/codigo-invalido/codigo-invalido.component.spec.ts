import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoInvalidoComponent } from './codigo-invalido.component';

describe('CodigoInvalidoComponent', () => {
  let component: CodigoInvalidoComponent;
  let fixture: ComponentFixture<CodigoInvalidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoInvalidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoInvalidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
