import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TrainerDetailsDTO} from "../dto/TrainerDetailsDTO";
import {UserService} from "../service/UserService";
import {ModifyCredentialsDetails} from "../model/ModifyCredentialsDetails";
import {FormControl, Validators} from "@angular/forms";
import {TrainerUpdateRequest} from "../dto/TrainerUpdateRequest";
import {TrainerService} from "../service/trainer.service";
import {SnackBarService} from "../service/snack-bar.service";

interface Specialization {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update-trainer',
  templateUrl: './update-trainer.component.html',
  styleUrls: ['./update-trainer.component.css']
})
export class UpdateTrainerComponent {

  trainerProfile : TrainerDetailsDTO = new TrainerDetailsDTO();


  modifyCredentialsDetails : ModifyCredentialsDetails = new ModifyCredentialsDetails();
  constructor(private route: ActivatedRoute, private router: Router, private trainerService : TrainerService, private snackBar : SnackBarService) {
  }

  ngOnInit() {
    const state = window.history.state;
    this.trainerProfile = state.trainerProfile;
    // console.log("we are inside my update trainer component " + this.trainer + "\n" + this.trainer.active);
  }

  submitForm(){
    let modifiedTrainer : TrainerUpdateRequest = {
      firstName: this.trainerProfile.firstName,
      lastName: this.trainerProfile.lastName,
      active: this.trainerProfile.active,
      email: '',
      userName: this.trainerProfile.userName
    };

    this.trainerService.updateTrainer(modifiedTrainer).subscribe(value => {
      this.snackBar.openSnackBar("Profile updated succesfully",1500);
      this.router.navigate(['trainer-account'],{state :{trainerProfile : this.trainerProfile}});
    },error => {
      this.snackBar.openSnackBar("Unable to update profile",1500);
      // this.router.navigate(['sign-in']);
    })

  }
}
