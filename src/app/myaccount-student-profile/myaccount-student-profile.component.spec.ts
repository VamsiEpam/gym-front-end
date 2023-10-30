import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountStudentProfileComponent } from './myaccount-student-profile.component';

describe('MyaccountStudentProfileComponent', () => {
  let component: MyaccountStudentProfileComponent;
  let fixture: ComponentFixture<MyaccountStudentProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyaccountStudentProfileComponent]
    });
    fixture = TestBed.createComponent(MyaccountStudentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
