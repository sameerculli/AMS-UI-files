import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccrualPage } from './view-accrual.page';

describe('ViewAccrualPage', () => {
  let component: ViewAccrualPage;
  let fixture: ComponentFixture<ViewAccrualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccrualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccrualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
