import { Component } from '@angular/core';
import {Trainee} from "../model/Trainee";
import {Trainer} from "../model/Trainer";
import {TraineeDetailsDTO} from "../dto/TraineeDetailsDTO";
import {ActivatedRoute, Router} from "@angular/router";
import {TrainerService} from "../service/trainer.service";
import {SnackBarService} from "../service/snack-bar.service";
import {TraineeService} from "../service/trainee.service";
import {TraineeUpdateRequest} from "../dto/TraineeUpdateRequest";

@Component({
  selector: 'app-update-trainee',
  templateUrl: './update-trainee.component.html',
  styleUrls: ['./update-trainee.component.css']
})
export class UpdateTraineeComponent {
  trainee: TraineeDetailsDTO = new TraineeDetailsDTO();

  constructor(private route: ActivatedRoute, private router: Router, private traineeService : TraineeService, private snackBar : SnackBarService) {}

  ngOnInit() {
    const state = window.history.state;
    this.trainee = state.traineeProfile;
  }

  submitForm() {
    let modifiedTrainee : TraineeUpdateRequest = {
      firstName : this.trainee.firstName,
      userName : this.trainee.userName,
      email : '',
      dob : this.trainee.dateOfBirth,
      active : this.trainee.active,
      address : this.trainee.address,
      lastName : this.trainee.lastName
    }

    this.traineeService.updateTrainee(modifiedTrainee).subscribe(value => {
      this.snackBar.openSnackBar("Profile updated succesfully",1500);
      this.router.navigate(['trainee-account'],{state :{traineeProfile : this.trainee}});
    },error => {
      this.snackBar.openSnackBar("Unable to update profile",1500);
      // this.router.navigate(['sign-in']);
    })

  }

}
