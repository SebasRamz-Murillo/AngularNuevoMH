import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaObjetoFormEditComponent } from './zona-objeto-form-edit.component';

describe('ZonaObjetoFormEditComponent', () => {
  let component: ZonaObjetoFormEditComponent;
  let fixture: ComponentFixture<ZonaObjetoFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaObjetoFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaObjetoFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
