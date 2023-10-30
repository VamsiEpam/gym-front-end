import { Component } from '@angular/core';
import {TrainerBasicDetails} from "../dto/TrainerBasicDetails";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {ActivatedRoute, Router} from "@angular/router";
import {TraineeService} from "../service/trainee.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TraineeTrainersList} from "../dto/TraineeTrainersList";
import {TraineeDetailsDTO} from "../dto/TraineeDetailsDTO";
import {SnackBarService} from "../service/snack-bar.service";
import {TrainerService} from "../service/trainer.service";

@Component({
  selector: 'app-edit-trainers',
  templateUrl: './edit-trainers.component.html',
  styleUrls: ['./edit-trainers.component.css']
})
export class EditTrainersComponent {

  displayedColumns: string[] = ['select', 'username', 'firstName', 'specialization'];


  trainerProfiles: TrainerBasicDetails[] = [];
  traineeProfile: TraineeDetailsDTO = new TraineeDetailsDTO();
  existingTrainerProfiles: TrainerBasicDetails[] = [];


  dataSource = new MatTableDataSource<TrainerBasicDetails>();
  selection = new SelectionModel<TrainerBasicDetails>(true, []);

  loading = true;
  traineeFirstName: any;

  constructor(private route: ActivatedRoute, private router: Router, private traineeService:TraineeService, private _snackBar: SnackBarService, private trainerService : TrainerService) {
  }


  ngOnInit() {
    const state = window.history.state;
    if (state && state.traineeProfile) {
      this.traineeProfile = state.traineeProfile;
      this.traineeFirstName = this.traineeProfile.firstName;
      if (this.traineeProfile.trainersList) {
        for (const trainer of this.traineeProfile.trainersList) {
          this.existingTrainerProfiles.push(new TrainerBasicDetails(trainer.userName, trainer.firstName, trainer.lastName, trainer.specialization));
        }
      }


      this.fetchFreeTrainers(this.traineeProfile.userName);
      //this.trainerProfiles = this.traineeProfile.trainersList;
      console.log('Received traineeProfile data:', this.traineeProfile);
      // You can now use this.traineeProfile in your component
    } else {
      console.log('No traineeProfile data received.');
    }
  }


  fetchFreeTrainers(username: string | undefined){
    this.traineeService.getFreeTrainers(username).subscribe(value => {
      console.log(value);
      for (const trainer of this.existingTrainerProfiles) {
        this.dataSource.data.push(trainer);
        this.selection.select(trainer);
      }

      // Loop through received trainers and add them to dataSource
      for (const trainer of value) {
        this.dataSource.data.push(trainer);
      }


      this.loading = false;
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }


  checkboxLabel(row?: TrainerBasicDetails): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.userName}`;
  }


  saveSelectedItems() {
    const selectedElements = this.selection.selected;

    console.log('Selected Elements:');
    let trainers: string[] = [];
    if (selectedElements.length > 0) {
      for (const element of selectedElements) {
        console.log(`Position: ${element.userName}, Name: ${element.firstName}, Weight: ${element.specialization}`);
        if (element.userName != null) {
          trainers.push(element.userName);
        }
      }

      this.traineeProfile.trainersList = selectedElements;
        // this.trainerService.filterTrainersByUsernames(this.traineeProfile.trainersList,trainers);

      let traineeTrainerList = new TraineeTrainersList(this.traineeProfile.userName, trainers);

      this.traineeService.updateTrainersList(traineeTrainerList).subscribe(value => {
        //console.log("Updated trainers List "+value);
        this.openSnackBar();
        this.router.navigate(['/trainee-account'],{state : {traineeProfile : this.traineeProfile}});
      })

    } else {
      this._snackBar.openSnackBar("Please select atleast one Trainer", 2000);
    }
  }


  openSnackBar() {
    this._snackBar.openSnackBar("Successfully Updated Trainers", 2000);
  }
}
