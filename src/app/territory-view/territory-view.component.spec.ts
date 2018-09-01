import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoryViewComponent } from './territory-view.component';

describe('TerritoryViewComponent', () => {
  let component: TerritoryViewComponent;
  let fixture: ComponentFixture<TerritoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerritoryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
