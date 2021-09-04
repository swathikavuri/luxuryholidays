/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TravelwiseComponent } from './travelwise.component';

describe('TravelwiseComponent', () => {
  let component: TravelwiseComponent;
  let fixture: ComponentFixture<TravelwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
