import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvatarSelectDialogBodyComponent } from './user-avatar-select-dialog-body.component';

describe('UserAvatarSelectDialogBodyComponent', () => {
  let component: UserAvatarSelectDialogBodyComponent;
  let fixture: ComponentFixture<UserAvatarSelectDialogBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAvatarSelectDialogBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAvatarSelectDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
