import { Component } from '@angular/core';
import {TrainingDTO} from "../dto/TrainingDTO";
import {TraineeDetailsDTO} from "../dto/TraineeDetailsDTO";
import {ActivatedRoute, Router} from "@angular/router";
import {TrainerDetailsDTO} from "../dto/TrainerDetailsDTO";

@Component({
  selector: 'app-trainer-trainings-display',
  templateUrl: './trainer-trainings-display.component.html',
  styleUrls: ['./trainer-trainings-display.component.css']
})
export class TrainerTrainingsDisplayComponent {
  trainingData: TrainingDTO[] = [];
  displayedColumns: string[] = ['name', 'date', 'duration', 'trainerName', 'traineeName'];

  trainerProfile : TrainerDetailsDTO = new TrainerDetailsDTO();

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const state = window.history.state;
    this.trainingData = state.trainings;
    this.trainerProfile = state.trainerProfile;
    console.log(this.trainingData)
    console.log(this.trainerProfile)
  }

  goBack() {
    console.log(this.trainerProfile)
    this.router.navigate(['/trainer-account'],{state : {trainerProfile : this.trainerProfile}});

  }
}
