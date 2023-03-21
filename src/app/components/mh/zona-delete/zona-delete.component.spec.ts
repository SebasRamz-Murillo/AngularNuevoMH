import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaDeleteComponent } from './zona-delete.component';

describe('ZonaDeleteComponent', () => {
  let component: ZonaDeleteComponent;
  let fixture: ComponentFixture<ZonaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
