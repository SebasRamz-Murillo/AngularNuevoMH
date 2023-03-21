import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInvalidComponent } from './password-invalid.component';

describe('PasswordInvalidComponent', () => {
  let component: PasswordInvalidComponent;
  let fixture: ComponentFixture<PasswordInvalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordInvalidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordInvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
