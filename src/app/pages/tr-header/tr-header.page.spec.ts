import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TRHeaderPage } from './tr-header.page';

describe('TRHeaderPage', () => {
  let component: TRHeaderPage;
  let fixture: ComponentFixture<TRHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TRHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TRHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
