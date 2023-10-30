import { Component } from '@angular/core';
import {TrainerDetailsDTO} from "../dto/TrainerDetailsDTO";
import {ActivatedRoute, Router} from "@angular/router";
export interface TrainerInfo {
  specialization: string;
  firstname: string;
  lastname: string;
}

@Component({
  selector: 'app-myaccount-trainer-profile',
  templateUrl: './myaccount-trainer-profile.component.html',
  styleUrls: ['./myaccount-trainer-profile.component.css']
})
export class MyaccountTrainerProfileComponent {
  displayedColumns: string[] = ['firstname', 'lastname'];
  dataSource : TrainerInfo[] = [];

  trainerProfile : TrainerDetailsDTO = new TrainerDetailsDTO();

  constructor(private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    const state = window.history.state;
    this.trainerProfile = state.trainerProfile;
    this.trainerProfile.traineeDetailsList.forEach(value => {
      this.dataSource.push({specialization : value.specialization, firstname : value.firstName, lastname : value.lastName})
    })
    console.log("we are inside my profile component " + this.trainerProfile.traineeDetailsList[0].firstName);

  }

  editProfile() {
    this.router.navigate(['/edit-trainer-profile'],{state : {trainerProfile : this.trainerProfile}});
  }

    editPassword() {
      this.router.navigate(['/edit-password'],{state : {userName : this.trainerProfile.userName}});
    }
}
