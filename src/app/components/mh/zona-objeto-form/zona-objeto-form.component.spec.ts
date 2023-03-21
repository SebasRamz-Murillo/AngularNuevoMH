import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaObjetoFormComponent } from './zona-objeto-form.component';

describe('ZonaObjetoFormComponent', () => {
  let component: ZonaObjetoFormComponent;
  let fixture: ComponentFixture<ZonaObjetoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaObjetoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaObjetoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
