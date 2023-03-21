import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCuentaActivaComponent } from './info-cuenta-activa.component';

describe('InfoCuentaActivaComponent', () => {
  let component: InfoCuentaActivaComponent;
  let fixture: ComponentFixture<InfoCuentaActivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCuentaActivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCuentaActivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
