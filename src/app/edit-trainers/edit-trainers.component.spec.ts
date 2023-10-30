import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainersComponent } from './edit-trainers.component';

describe('EditTrainersComponent', () => {
  let component: EditTrainersComponent;
  let fixture: ComponentFixture<EditTrainersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTrainersComponent]
    });
    fixture = TestBed.createComponent(EditTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
