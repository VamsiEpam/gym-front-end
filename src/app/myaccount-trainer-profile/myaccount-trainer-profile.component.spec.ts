import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountTrainerProfileComponent } from './myaccount-trainer-profile.component';

describe('MyaccountTrainerProfileComponent', () => {
  let component: MyaccountTrainerProfileComponent;
  let fixture: ComponentFixture<MyaccountTrainerProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyaccountTrainerProfileComponent]
    });
    fixture = TestBed.createComponent(MyaccountTrainerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
