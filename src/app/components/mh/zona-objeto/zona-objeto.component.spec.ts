import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaObjetoComponent } from './zona-objeto.component';

describe('ZonaObjetoComponent', () => {
  let component: ZonaObjetoComponent;
  let fixture: ComponentFixture<ZonaObjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaObjetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
