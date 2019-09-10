import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TRItemPage } from './tr-item.page';

describe('TRItemPage', () => {
  let component: TRItemPage;
  let fixture: ComponentFixture<TRItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TRItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TRItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
