import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { formatDate } from "@angular/common";
import { TraineeService } from "../service/trainee.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { TrainerBasicDetails } from "../dto/TrainerBasicDetails";
import { TraineeDetailsDTO } from "../dto/TraineeDetailsDTO";
import { TraineeTrainingsRequest } from "../dto/TraineeTrainingsRequest";
import { TrainingDTO } from "../dto/TrainingDTO";

@Component({
  selector: 'app-trainee-training-request-box',
  templateUrl: './trainee-training-request-box.component.html',
  styleUrls: ['./trainee-training-request-box.component.css']
})

export class TraineeTrainingRequestBoxComponent {
  trainingForm: FormGroup;
  trainingList: string[] = [];
  trainersList: TrainerBasicDetails[] = [];
  traineeProfile: TraineeDetailsDTO = new TraineeDetailsDTO();

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private traineeService: TraineeService, private snackBar: MatSnackBar,
              private router: Router) {

    if (data) {
      this.traineeProfile = data;
    }

    if (this.traineeProfile.trainersList) {
      this.trainersList = this.traineeProfile.trainersList;
    }

    if (this.traineeProfile.trainersList) {
      for (const trainer of this.traineeProfile.trainersList) {
        const training = trainer.specialization;
        if (!this.trainingList.includes(<string>training)) {
          if (training != null) {
            this.trainingList.push(training);
          }
        }
      }
    }

    this.trainingForm = this.fb.group({
      traineeName: [{ value: '', disabled: true }, Validators.required],
      trainerToggle: [false],
      trainerName: [{ value: '', disabled: true }, Validators.required],
      range: new FormGroup({
        start: new FormControl<Date | null>({ value: null, disabled: true }),
        end: new FormControl<Date | null>({ value: null, disabled: true }),
      }), // Set the initial disabled state
      dateToggle: [false],
      trainingType: [{ value: null, disabled: true }, Validators.required],
      trainingToggle: [false],
    });

    this.trainingForm.get('trainerToggle')?.valueChanges.subscribe((value) => {
      if (value) {
        this.trainingForm.get('trainerName')?.enable();
        this.trainingForm.get('trainingType')?.disable();
        this.trainingForm.get('trainingToggle')?.setValue(false);
      } else {
        this.trainingForm.get('trainerName')?.disable();
        this.trainingForm.get('trainerName')?.setValue(''); // Reset the trainerName value
      }
    });

    this.trainingForm.get('dateToggle')?.valueChanges.subscribe((value) => {
      if (value) {
        this.trainingForm.get('range')?.enable();
      } else {
        this.trainingForm.get('range')?.disable();
      }
    });

    this.trainingForm.get('trainingToggle')?.valueChanges.subscribe((value) => {
      if (value) {
        this.trainingForm.get('trainingType')?.enable();
        this.trainingForm.get('trainerName')?.disable();
        this.trainingForm.get('trainerToggle')?.setValue(false);
      } else {
        this.trainingForm.get('trainingType')?.disable();
      }
    });

    this.trainingForm.get('traineeName')?.setValue(this.traineeProfile.userName);
  }

  onSubmit() {
    const formValues = this.trainingForm.value;
    console.log(formValues);

    let traineeTrainings: TraineeTrainingsRequest = new TraineeTrainingsRequest();
    traineeTrainings.userName = this.traineeProfile.userName;

    if (this.trainingForm.value.trainerToggle) {
      traineeTrainings.trainerName = this.trainingForm.value.trainerName;
      console.log("Trainer Chosen " + traineeTrainings.trainerName);
    }

    if (this.trainingForm.value.dateToggle) {
      const startDate = this.trainingForm.get('range.start')?.value;
      const endDate = this.trainingForm.get('range.end')?.value;
      if (startDate && endDate) {
        const formattedStartDate = formatDate(startDate, 'yyyy-MM-dd', 'en');
        const formattedEndDate = formatDate(endDate, 'yyyy-MM-dd', 'en');
        traineeTrainings.startDate = formattedStartDate;
        traineeTrainings.endDate = formattedEndDate;
      }
      console.log("Dates Chosen " + traineeTrainings.startDate + "  " + traineeTrainings.endDate);
    }

    if (this.trainingForm.value.trainingToggle) {
      // traineeTrainings.trainingTypeId
      const data = [
        { value: '1', viewValue: 'Resistance' },
        { value: '2', viewValue: 'Zumba' },
        { value: '3', viewValue: 'Yoga' },
        { value: '4', viewValue: 'Stretching' },
        { value: '5', viewValue: 'Fitness' }
      ];

      const viewValueToValueMap = new Map(data.map(item => [item.viewValue, item.value]));
      const value: number = parseInt(<string>viewValueToValueMap.get(this.trainingForm.value.trainingType));
      traineeTrainings.trainingTypeId = value;
      console.log("Chosen " + this.trainingForm.value.trainingType + " assigned Value " + value);
    }

    console.log(traineeTrainings);

    this.traineeService.getTrainings(traineeTrainings).subscribe(value => {
      console.log(value);
      if (value.errorMessage) {
        this.snackBar.open("Please Check Inputs and try Again!", "Ok");
      } else {
        let trainingsDetails: TrainingDTO[] = value;
        if (trainingsDetails.length > 0)
          this.router.navigate(['/trainee-trainings-display'], { state: { trainings: trainingsDetails, traineeProfile: this.traineeProfile } });
        else
          this.snackBar.open("No Training Records found", "Ok");
      }
    });
  }
}
