import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaDeleteComponent } from './receta-delete.component';

describe('RecetaDeleteComponent', () => {
  let component: RecetaDeleteComponent;
  let fixture: ComponentFixture<RecetaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
