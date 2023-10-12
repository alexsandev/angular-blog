import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarOptionComponent } from './menu-bar-option.component';

describe('MenuBarOptionComponent', () => {
  let component: MenuBarOptionComponent;
  let fixture: ComponentFixture<MenuBarOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBarOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
