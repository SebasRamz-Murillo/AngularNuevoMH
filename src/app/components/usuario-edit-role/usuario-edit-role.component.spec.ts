import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditRoleComponent } from './usuario-edit-role.component';

describe('UsuarioEditRoleComponent', () => {
  let component: UsuarioEditRoleComponent;
  let fixture: ComponentFixture<UsuarioEditRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioEditRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioEditRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
