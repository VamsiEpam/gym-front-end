import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsLogTraineeComponent } from './trainings-log-trainee.component';

describe('TrainingsLogTraineeComponent', () => {
  let component: TrainingsLogTraineeComponent;
  let fixture: ComponentFixture<TrainingsLogTraineeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingsLogTraineeComponent]
    });
    fixture = TestBed.createComponent(TrainingsLogTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
