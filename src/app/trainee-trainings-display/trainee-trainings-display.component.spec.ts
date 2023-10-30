import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeTrainingsDisplayComponent } from './trainee-trainings-display.component';

describe('TrainingsDisplayComponent', () => {
  let component: TraineeTrainingsDisplayComponent;
  let fixture: ComponentFixture<TraineeTrainingsDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraineeTrainingsDisplayComponent]
    });
    fixture = TestBed.createComponent(TraineeTrainingsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
