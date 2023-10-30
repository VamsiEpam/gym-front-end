import { Component } from '@angular/core';

@Component({
  selector: 'app-trainings-log-trainer',
  templateUrl: './trainings-log-trainer.component.html',
  styleUrls: ['./trainings-log-trainer.component.css']
})
export class TrainingsLogTrainerComponent {
  trainerName: string = '';
  specialization: string = '';
  fromDate: Date | null = null;
  toDate: Date | null = null;
  trainings: any[] = []; // Replace 'any[]' with the actual data type of your trainings
// Define an array of column names that should be displayed in the table
  displayedColumns: string[] = ['trainingDate', 'trainingName', 'trainingType', 'trainerName', 'trainingDuration'];

  searchTrainings() {
    // Implement the search logic based on user input
    // Populate 'this.trainings' with the search results
  }
}
