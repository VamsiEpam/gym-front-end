import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TrainerRegistrationComponent } from './trainer-registration/trainer-registration.component';
import { TraineeRegistrationComponent } from './trainee-registration/trainee-registration.component';
import { NavbarComponent } from './navbar/signup-navbar/navbar.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateTrainerComponent } from './update-trainer/update-trainer.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { TrainingsLogTrainerComponent } from './trainings-log-trainer/trainings-log-trainer.component';
import { TrainingComponent } from './training/training.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { MyaccountTrainerProfileComponent } from './myaccount-trainer-profile/myaccount-trainer-profile.component';
import { MyaccountStudentProfileComponent } from './myaccount-student-profile/myaccount-student-profile.component';
import {AppRoutingModule} from "./app-routing.module";
import {MatRadioModule} from "@angular/material/radio";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { FourNotFourComponent } from './four-not-four/four-not-four.component';
import { EditTrainersComponent } from './edit-trainers/edit-trainers.component';
import { TrainerNavbarComponent } from './navbar/trainer-navbar/trainer-navbar.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { CursorHoverDirective } from './cursor-hover.directive';
import { HomeNavbarComponent } from './navbar/homepage-navbar/home-navbar.component';
import {MatSliderModule} from "@angular/material/slider";
import { TrainerTrainingRequestBoxComponent } from './trainer-training-request-box/trainer-training-request-box.component';
import { TrainerTrainingsDisplayComponent } from './trainer-trainings-display/trainer-trainings-display.component';
import {TraineeNavbarComponent} from "./navbar/trainee-navbar/trainee-navbar.component";
import {
  TraineeTrainingRequestBoxComponent
} from "./trainee-training-request-box/trainee-training-request-box.component";
import {TraineeTrainingsDisplayComponent} from "./trainee-trainings-display/trainee-trainings-display.component";
import {PasswordUpdateComponent} from "./password-update/password-update.component";
import {UpdateTraineeComponent} from "./update-trainee/update-trainee.component";
import {TrainingsLogTraineeComponent} from "./trainings-log-trainee/trainings-log-trainee.component";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    TrainerRegistrationComponent,
    TrainerRegistrationComponent,
    TraineeRegistrationComponent,
    NavbarComponent,
    MyAccountComponent,
    JoinUsComponent,
    FooterComponent,
    PasswordUpdateComponent,
    UpdateTrainerComponent,
    UpdateTraineeComponent,
    TrainingsLogTraineeComponent,
    TrainingsLogTrainerComponent,
    TrainingComponent,
    HomePageComponent,
    MyaccountTrainerProfileComponent,
    MyaccountStudentProfileComponent,
    FourNotFourComponent,
    EditTrainersComponent,
    TrainerNavbarComponent,
    TraineeNavbarComponent,
    DialogBoxComponent,
    CursorHoverDirective,
    HomeNavbarComponent,
    TraineeTrainingRequestBoxComponent,
    TrainerTrainingRequestBoxComponent,
    TraineeTrainingsDisplayComponent,
    TrainerTrainingsDisplayComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    NgOptimizedImage,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    MatDialogModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSlideToggleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
