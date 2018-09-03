import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConquerComponent } from './conquer.component';

describe('ConquerComponent', () => {
  let component: ConquerComponent;
  let fixture: ComponentFixture<ConquerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConquerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConquerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
