import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Credentials} from "../model/Credentials";
import {Trainee} from "../model/Trainee";
import {SignInService} from "../service/sign-in.service";
import {TrainerService} from "../service/trainer.service";
import {TraineeService} from "../service/trainee.service";
import {TraineeDetailsDTO} from "../dto/TraineeDetailsDTO";
import {TrainerDetailsDTO} from "../dto/TrainerDetailsDTO";
import {SnackBarService} from "../service/snack-bar.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  hidePassword = true;

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  loginForm: any;
  selectedUserType: string = 'trainee';

  constructor(private snackBarService : SnackBarService, private router: Router, private signInService: SignInService, private trainerService : TrainerService, private traineeService:TraineeService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }


  onSubmit() {
    console.log(this.loginForm.value + "  "+ this.selectedUserType);
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);

    let credential = new Credentials(
      this.loginForm.value.username,
      this.loginForm.value.password
    );

    this.signInService.userAuthentication(credential).subscribe(
      data => {
          if (this.selectedUserType === 'trainee') {
            this.traineeService.getTraineeProfile(credential.userName).subscribe(value => {
             let traineeProfile : TraineeDetailsDTO = value;
              // console.log("value status "+ JSON.stringify(traineeProfile));
                  this.router.navigate(['trainee-account'], { state: { traineeProfile } });
            },error => {
              this.snackBarService.openSnackBar("No Trainee with that username",2000);
            })
          } else if (this.selectedUserType === 'trainer') {
            this.trainerService.getTrainerProfile(credential.userName).subscribe(value => {
                let trainerProfile : TrainerDetailsDTO = value;
                this.router.navigate(['trainer-account'], { state: { trainerProfile } });
            }, error => {
              this.snackBarService.openSnackBar("No Trainer with that username",2000);
            })
          }
      },
      error => {
        this.snackBarService.openSnackBar("Bad Credentials",2000);
      }
    )




  }


  navigateToMyAccount(profile: Trainee) {
    this.router.navigate(['myAccount'], { state: { profile } });
  }


  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
