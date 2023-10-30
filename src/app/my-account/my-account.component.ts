import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Trainee} from "../model/Trainee";

interface TrainerInfo {
  name : string;
  specialization : string;
}
const ELEMENT_DATA: TrainerInfo[] = [
  {name: 'sreeja', specialization: 'yoga'},
  {name: 'siddu', specialization: 'cardio'},
  {name: 'lavanya', specialization: 'zumba'},
  {name: 'sasi', specialization: 'strength'},
  {name: 'vamsi', specialization: 'fitness'},

];

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})

export class MyAccountComponent {
  displayedColumns: string[] = ['name', 'specialization'];
  dataSource = ELEMENT_DATA;

  traineeProfile: Trainee = new Trainee(); // Define the variable to hold the profile data

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const state = window.history.state;
    this.traineeProfile = state.profile;
    console.log("we are inside my profile component " + this.traineeProfile);

    if (this.traineeProfile.trainersList) {
      for (const trainer of this.traineeProfile.trainersList) {
        if (trainer.firstName && trainer.specialization) {
          this.dataSource.push({
            name: trainer.firstName, // Replace with the actual property name in TraineeProfile
            specialization: trainer.specialization, // Replace with the actual property name in TraineeProfile
          });
        }
      }
    }
  }


  editTrainers() {
    this.router.navigate(['/editTrainersList'], { state: { traineeProfile: this.traineeProfile } });
  }

}

