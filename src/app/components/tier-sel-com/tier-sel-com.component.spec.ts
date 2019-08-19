import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierSelComComponent } from './tier-sel-com.component';

describe('TierSelComComponent', () => {
  let component: TierSelComComponent;
  let fixture: ComponentFixture<TierSelComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierSelComComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierSelComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
