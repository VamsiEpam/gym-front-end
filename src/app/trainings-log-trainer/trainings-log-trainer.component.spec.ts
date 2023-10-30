import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsLogTrainerComponent } from './trainings-log-trainer.component';

describe('TrainingsLogTrainerComponent', () => {
  let component: TrainingsLogTrainerComponent;
  let fixture: ComponentFixture<TrainingsLogTrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingsLogTrainerComponent]
    });
    fixture = TestBed.createComponent(TrainingsLogTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
