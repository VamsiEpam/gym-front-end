import { Component } from '@angular/core';
import {Trainer} from "../model/Trainer";
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {Trainee} from "../model/Trainee";
import {TraineeBasicDetails} from "../dto/TraineeBasicDetails";
import {TrainerService} from "../service/trainer.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {TrainingDTO} from "../dto/TrainingDTO";
import {SnackBarService} from "../service/snack-bar.service";

interface Specialization {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {

  trainingDuration: number = 30;

  trainingForm : any;

  trainees : TraineeBasicDetails[] = [];

  userNameFromState : string = '';

  trainerProfile : any;

  // traineeUserName : string = '';

  specializations: Specialization[] = [
    {value: 'fitness-0', viewValue: 'fitness'},
    {value: 'yoga-1', viewValue: 'yoga'},
    {value: 'Zumba-2', viewValue: 'Zumba'},
    {value: 'stretching-3', viewValue: 'stretching'},
    {value: 'resistance-4', viewValue: 'resistance'},
  ];

  constructor(private trainerService:TrainerService,private router:Router,public dialog: MatDialog, private snackBar : SnackBarService) {
    this.trainingForm = new FormGroup({
      trainingDate: new FormControl('', Validators.required),
      trainingName: new FormControl('', Validators.required),
      specialization: new FormControl('', Validators.required),
      traineeInput: new FormControl('', Validators.required),
      trainingDuration: new FormControl('', Validators.required),
      traineeUserName : new FormControl('',Validators.required)
    });
  }

    ngOnInit() {
      const state = window.history.state;
      this.trainerProfile = state.trainerProfile;
      this.trainees = state.trainerProfile.traineeDetailsList;
      this.userNameFromState = state.trainerProfile.userName;
      this.trainingForm.get('specialization')?.setValue(this.trainerProfile.specialization);
    }


  onSubmit() {
      const trainingDetails: TrainingDTO = {
        trainingDate: this.trainingForm.get('trainingDate').value,
        trainingDuration: this.trainingForm.get('trainingDuration').value,
        trainingName: this.trainingForm.get('trainingName').value,
        traineeUserName: this.trainingForm.get('traineeUserName').value,
        trainerUserName: this.userNameFromState,
      };
      console.log(trainingDetails.trainingDuration + " " + trainingDetails.trainingDate + " " + trainingDetails.trainingName + " " + trainingDetails.traineeUserName + " " + trainingDetails.trainerUserName + " ");
      // console.log(this.trainingForm.trainingDate+" "+this.trainingForm.trainingDuration+" "+this.trainingForm.trainingName+" "+this.trainingForm.traineeUserName+" "+this.userNameFromState+" ");
      this.trainerService.addTraining(trainingDetails).subscribe(value => {
          this.snackBar.openSnackBar("Training added succesfully", 1500);
          this.router.navigate(['trainer-account'],{state :{trainerProfile : this.trainerProfile}});
        },
        error => {
          this.snackBar.openSnackBar("Unable to add training");
          // this.router.navigate(["/"]);
        });
    }
  }
