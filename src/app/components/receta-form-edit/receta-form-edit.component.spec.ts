import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaFormEditComponent } from './receta-form-edit.component';

describe('RecetaFormEditComponent', () => {
  let component: RecetaFormEditComponent;
  let fixture: ComponentFixture<RecetaFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetaFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
