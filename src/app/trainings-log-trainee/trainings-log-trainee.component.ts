import { Component } from '@angular/core';

interface Specialization {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-trainings-log-trainee',
  templateUrl: './trainings-log-trainee.component.html',
  styleUrls: ['./trainings-log-trainee.component.css']
})
export class TrainingsLogTraineeComponent {


  trainerName: string = '';
  specialization: string = '';
  fromDate: Date | null = null;
  toDate: Date | null = null;
  trainings: any[] = []; // Replace 'any[]' with the actual data type of your trainings
// Define an array of column names that should be displayed in the table
  displayedColumns: string[] = ['trainingDate', 'trainingName', 'trainingType', 'trainerName', 'trainingDuration'];

  specializations: Specialization[] = [
    {value: 'fitness-0', viewValue: 'fitness'},
    {value: 'yoga-1', viewValue: 'yoga'},
    {value: 'Zumba-2', viewValue: 'Zumba'},
    {value: 'stretching-3', viewValue: 'stretching'},
    {value: 'resistance-4', viewValue: 'resistance'},
  ];
  searchTrainings() {
    // Implement the search logic based on user input
    // Populate 'this.trainings' with the search results
  }
}
