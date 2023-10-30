import {Component, Input, OnInit} from '@angular/core';
import {state} from "@angular/animations";
import {ActivatedRoute, Router} from "@angular/router";
import {
  TraineeTrainingRequestBoxComponent
} from "../../trainee-training-request-box/trainee-training-request-box.component";
import {MatDialog} from "@angular/material/dialog";
import {
  TrainerTrainingRequestBoxComponent
} from "../../trainer-training-request-box/trainer-training-request-box.component";
import {TrainerDetailsDTO} from "../../dto/TrainerDetailsDTO";

@Component({
  selector: 'app-trainer-navbar',
  templateUrl: './trainer-navbar.component.html',
  styleUrls: ['./trainer-navbar.component.css']
})
export class TrainerNavbarComponent implements OnInit{

  @Input() trainerProfile : TrainerDetailsDTO = new TrainerDetailsDTO();

  ngOnInit(): void {
    const state = window.history.state;
    this.trainerProfile = state.trainerProfile;
  }


  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
  }

  addTraining() {
    this.router.navigate(['add-training'],{state : {trainerProfile : this.trainerProfile}})
  }

  viewTraining() {
    console.log(JSON.stringify(this.trainerProfile)+"from navbar trainer")
    this.dialog.open(TrainerTrainingRequestBoxComponent, {
      data: this.trainerProfile
    });
  }

  homepage() {
    this.router.navigate(['trainer-account'],{state : {trainerProfile : this.trainerProfile}})
  }

  signOut() {
    this.trainerProfile = new TrainerDetailsDTO();
    this.router.navigate(['/'])
  }
}
