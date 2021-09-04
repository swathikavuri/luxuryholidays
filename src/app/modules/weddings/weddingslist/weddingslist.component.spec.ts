import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingslistComponent } from './weddingslist.component';

describe('WeddingslistComponent', () => {
  let component: WeddingslistComponent;
  let fixture: ComponentFixture<WeddingslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
