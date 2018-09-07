import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanAddedComponent } from './clan-added.component';

describe('ClanAddedComponent', () => {
  let component: ClanAddedComponent;
  let fixture: ComponentFixture<ClanAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
