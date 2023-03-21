import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCorreoComponent } from './info-correo.component';

describe('InfoCorreoComponent', () => {
  let component: InfoCorreoComponent;
  let fixture: ComponentFixture<InfoCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCorreoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
