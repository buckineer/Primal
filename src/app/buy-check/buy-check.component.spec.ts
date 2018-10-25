import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCheckComponent } from './buy-check.component';

describe('BuyCheckComponent', () => {
  let component: BuyCheckComponent;
  let fixture: ComponentFixture<BuyCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
