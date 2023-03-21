import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaFormEditComponent } from './mapa-form-edit.component';

describe('MapaFormEditComponent', () => {
  let component: MapaFormEditComponent;
  let fixture: ComponentFixture<MapaFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
