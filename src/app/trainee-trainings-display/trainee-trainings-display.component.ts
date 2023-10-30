import { Component } from '@angular/core';
import {TrainingDTO} from "../dto/TrainingDTO";
import {TraineeDetailsDTO} from "../dto/TraineeDetailsDTO";
import {ActivatedRoute, Router} from "@angular/router";
import {TraineeService} from "../service/trainee.service";
import {SnackBarService} from "../service/snack-bar.service";
import {TrainerService} from "../service/trainer.service";

@Component({
  selector: 'app-trainee-trainings-display',
  templateUrl: './trainee-trainings-display.component.html',
  styleUrls: ['./trainee-trainings-display.component.css']
})
export class TraineeTrainingsDisplayComponent {
  trainingData: TrainingDTO[] = [];
  displayedColumns: string[] = ['name', 'date', 'duration', 'trainerName', 'traineeName'];

  traineeProfile : TraineeDetailsDTO = new TraineeDetailsDTO();

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const state = window.history.state;
    this.trainingData = state.trainings;
    this.traineeProfile = state.traineeProfile;
    console.log(this.trainingData)
  }

  goBack() {
    this.router.navigate(['/trainee-account'],{state : {traineeProfile : this.traineeProfile}});

  }
}
