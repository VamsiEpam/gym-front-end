import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {formatDate} from "@angular/common";
import {TraineeBasicDetails} from "../dto/TraineeBasicDetails";
import {TrainerDetailsDTO} from "../dto/TrainerDetailsDTO";
import {TrainerService} from "../service/trainer.service";
import {TrainerBasicDetails} from "../dto/TrainerBasicDetails";
import {TrainerTrainings} from "../dto/TrainerTrainings";
import {TrainingDTO} from "../dto/TrainingDTO";

@Component({
  selector: 'app-trainer-training-request-box',
  templateUrl: './trainer-training-request-box.component.html',
  styleUrls: ['./trainer-training-request-box.component.css']
})
export class TrainerTrainingRequestBoxComponent {
  trainingForm : FormGroup;
  traineesList : TrainerBasicDetails[] = [];
  trainerProfile : TrainerDetailsDTO = new TrainerDetailsDTO();

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private trainerService: TrainerService, private snackBar:MatSnackBar,
              private router:Router) {

    if (data) {
      this.trainerProfile = data;
    }

    if(this.trainerProfile.traineeDetailsList){
      this.traineesList = this.trainerProfile.traineeDetailsList;
    }


    this.trainingForm = this.fb.group({
      trainerName: [{ value: '', disabled: true }, Validators.required],
      traineeName: [{ value: '', disabled: true }, Validators.required],
      traineeToggle: [false],
      range: new FormGroup({
        start: new FormControl<Date | null>({ value: null, disabled: true }),
        end: new FormControl<Date | null>({ value: null, disabled: true }),
      }),
      dateToggle: [false]
    });

    this.trainingForm.get('traineeToggle')?.valueChanges.subscribe((value) => {
      if (value) {
        this.trainingForm.get('traineeName')?.enable();
      } else {
        this.trainingForm.get('traineeName')?.disable();
      }
    });

    this.trainingForm.get('dateToggle')?.valueChanges.subscribe((value) => {
      if (value) {
        this.trainingForm.get('range')?.enable();
      } else {
        this.trainingForm.get('range')?.disable();
      }
    });

    this.trainingForm.get('trainerName')?.setValue(this.trainerProfile.userName);
  }

  onSubmit() {

    const formValues = this.trainingForm.value;
    console.log(formValues);

    let trainerTrainings : TrainerTrainings = new TrainerTrainings();
    trainerTrainings.userName = this.trainerProfile.userName;

    if(this.trainingForm.value.traineeToggle){
      trainerTrainings.traineeName=this.trainingForm.value.traineeName;
      console.log("Trainer Chosen "+trainerTrainings.traineeName);
    }

    console.log(JSON.stringify(this.trainerProfile)+"from reqeust box trainer")

    if(this.trainingForm.value.dateToggle){
      const startDate = this.trainingForm.get('range.start')?.value;
      const endDate = this.trainingForm.get('range.end')?.value;
      if (startDate && endDate) {
        const formattedStartDate = formatDate(startDate, 'yyyy-MM-dd', 'en');
        const formattedEndDate = formatDate(endDate, 'yyyy-MM-dd', 'en');
        trainerTrainings.startDate = formattedStartDate;
        trainerTrainings.endDate = formattedEndDate;
      }
      console.log("Dates Chosen "+trainerTrainings.startDate+ "  "+trainerTrainings.endDate);
    }




    this.trainerService.getTrainings(trainerTrainings).subscribe(value => {
      console.log(value);
      if(value.errorMessage){
        this.snackBar.open("Please Check Inputs and try Again!", "Ok");
      }else{
        let trainingsDetails: TrainingDTO[] = value;
        if(trainingsDetails.length>0)
          this.router.navigate(['/trainer-trainings-display'], {state:{trainings: trainingsDetails, trainerProfile : this.trainerProfile}});
        else
          this.snackBar.open("No Training Records found", "Ok");
      }
    })

  }
}
