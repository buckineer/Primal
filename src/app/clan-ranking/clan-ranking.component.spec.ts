import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanRankingComponent } from './clan-ranking.component';

describe('ClanRankingComponent', () => {
  let component: ClanRankingComponent;
  let fixture: ComponentFixture<ClanRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
