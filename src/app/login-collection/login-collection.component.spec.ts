import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCollectionComponent } from './login-collection.component';

describe('LoginCollectionComponent', () => {
  let component: LoginCollectionComponent;
  let fixture: ComponentFixture<LoginCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
