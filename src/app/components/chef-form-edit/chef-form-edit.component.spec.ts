import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefFormEditComponent } from './chef-form-edit.component';

describe('ChefFormEditComponent', () => {
  let component: ChefFormEditComponent;
  let fixture: ComponentFixture<ChefFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
