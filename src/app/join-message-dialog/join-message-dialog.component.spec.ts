import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinMessageDialogComponent } from './join-message-dialog.component';

describe('JoinMessageDialogComponent', () => {
  let component: JoinMessageDialogComponent;
  let fixture: ComponentFixture<JoinMessageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinMessageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinMessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
