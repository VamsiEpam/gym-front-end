import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {
  TraineeTrainingRequestBoxComponent
} from "../../trainee-training-request-box/trainee-training-request-box.component";
import {TraineeDetailsDTO} from "../../dto/TraineeDetailsDTO";

@Component({
  selector: 'app-trainee-navbar',
  templateUrl: './trainee-navbar.component.html',
  styleUrls: ['./trainee-navbar.component.css']
})
export class TraineeNavbarComponent {

  @Input() traineeProfile : TraineeDetailsDTO = new TraineeDetailsDTO();

  ngOnInit(): void {
    const state = window.history.state;
    this.traineeProfile = state.traineeProfile;
  }

  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
  }
  homePage() {
    this.router.navigate(['trainee-account'],{state : {traineeProfile : this.traineeProfile}})
  }

  viewTrainings() {
    this.dialog.open(TraineeTrainingRequestBoxComponent, {
      data: this.traineeProfile
    });
  }

  signOut() {
    this.traineeProfile = new TraineeDetailsDTO();
    this.router.navigate(['/'])
  }
}
