import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccrualitemPage } from './view-accrualitem.page';

describe('ViewAccrualitemPage', () => {
  let component: ViewAccrualitemPage;
  let fixture: ComponentFixture<ViewAccrualitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccrualitemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccrualitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
