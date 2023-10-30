import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerTrainingsDisplayComponent } from './trainer-trainings-display.component';

describe('TrainerTrainingsDisplayComponent', () => {
  let component: TrainerTrainingsDisplayComponent;
  let fixture: ComponentFixture<TrainerTrainingsDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerTrainingsDisplayComponent]
    });
    fixture = TestBed.createComponent(TrainerTrainingsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
