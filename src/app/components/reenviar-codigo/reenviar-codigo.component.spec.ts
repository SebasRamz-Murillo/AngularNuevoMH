import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReenviarCodigoComponent } from './reenviar-codigo.component';

describe('ReenviarCodigoComponent', () => {
  let component: ReenviarCodigoComponent;
  let fixture: ComponentFixture<ReenviarCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReenviarCodigoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReenviarCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
