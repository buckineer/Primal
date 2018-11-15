import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGiftListComponent } from './my-gift-list.component';

describe('MyGiftListComponent', () => {
  let component: MyGiftListComponent;
  let fixture: ComponentFixture<MyGiftListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGiftListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGiftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
