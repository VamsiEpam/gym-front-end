import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JoinUsComponent} from "./join-us/join-us.component";
import {TrainerRegistrationComponent} from "./trainer-registration/trainer-registration.component";
import {TraineeRegistrationComponent} from "./trainee-registration/trainee-registration.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {MyaccountTrainerProfileComponent} from "./myaccount-trainer-profile/myaccount-trainer-profile.component";
import {MyaccountStudentProfileComponent} from "./myaccount-student-profile/myaccount-student-profile.component";
import {FourNotFourComponent} from "./four-not-four/four-not-four.component";
import {EditTrainersComponent} from "./edit-trainers/edit-trainers.component";
import {UpdateTraineeComponent} from "./update-trainee/update-trainee.component";
import {UpdateTrainerComponent} from "./update-trainer/update-trainer.component";
import {PasswordUpdateComponent} from "./password-update/password-update.component";
import {TrainingComponent} from "./training/training.component";
import {TraineeTrainingsDisplayComponent} from "./trainee-trainings-display/trainee-trainings-display.component";
import {TrainerTrainingsDisplayComponent} from "./trainer-trainings-display/trainer-trainings-display.component";

const routes: Routes = [


  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomePageComponent
  },

  {
    path: "sign-in",
    component: SignInComponent
  },
  // {
  //   path: "aboutUs",
  //   component: HomePageComponent
  // },
  {
    path: "join-us",
    component: JoinUsComponent
  },
  {
    path: "trainer-registration",
    component: TrainerRegistrationComponent
  },
  {
    path: "trainee-registration",
    component: TraineeRegistrationComponent
  },
  {
    path: "trainee-account",
    component: MyaccountStudentProfileComponent
  },
  {
    path: "trainer-account",
    component: MyaccountTrainerProfileComponent
  },
  {
    path:"edit-password",
    component: PasswordUpdateComponent
  },
  {
    path:"edit-trainers",
    component: EditTrainersComponent
  },
  {
    path:"edit-trainee-profile",
    component:UpdateTraineeComponent
  },
  {
    path:"edit-trainer-profile",
    component:UpdateTrainerComponent
  },
  {
    path:"add-training",
    component:TrainingComponent
  },
  {
    path:"trainee-trainings",
    component:TrainingComponent
  },
  {
    path:"trainee-trainings-display",
    component:TraineeTrainingsDisplayComponent
  },
  {
    path:"trainer-trainings-display",
    component:TrainerTrainingsDisplayComponent
  },
  {
    path : "**",
    component : FourNotFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

