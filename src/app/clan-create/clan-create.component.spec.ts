import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanCreateComponent } from './clan-create.component';

describe('ClanCreateComponent', () => {
  let component: ClanCreateComponent;
  let fixture: ComponentFixture<ClanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
