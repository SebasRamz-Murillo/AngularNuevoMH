import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDeleteComponent } from './chef-delete.component';

describe('ChefDeleteComponent', () => {
  let component: ChefDeleteComponent;
  let fixture: ComponentFixture<ChefDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
