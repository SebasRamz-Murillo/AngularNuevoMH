import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDeleteComponent } from './mapa-delete.component';

describe('MapaDeleteComponent', () => {
  let component: MapaDeleteComponent;
  let fixture: ComponentFixture<MapaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
