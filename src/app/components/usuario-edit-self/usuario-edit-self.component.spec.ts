import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditSelfComponent } from './usuario-edit-self.component';

describe('UsuarioEditSelfComponent', () => {
  let component: UsuarioEditSelfComponent;
  let fixture: ComponentFixture<UsuarioEditSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioEditSelfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioEditSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
