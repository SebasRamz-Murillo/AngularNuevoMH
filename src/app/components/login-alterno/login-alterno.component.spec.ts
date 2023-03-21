import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAlternoComponent } from './login-alterno.component';

describe('LoginAlternoComponent', () => {
  let component: LoginAlternoComponent;
  let fixture: ComponentFixture<LoginAlternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAlternoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAlternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
