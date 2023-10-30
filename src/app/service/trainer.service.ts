import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Trainee} from "../model/Trainee";
import {Observable} from "rxjs";
import {BaseUrlService} from "./BaseUrlService";
import {TrainerUpdateRequest} from "../dto/TrainerUpdateRequest";
import {Trainer} from "../model/Trainer";
import {TrainingDTO} from "../dto/TrainingDTO";
import {TraineeDetailsDTO} from "../dto/TraineeDetailsDTO";
import {TrainerBasicDetails} from "../dto/TrainerBasicDetails";
import {TrainerTrainings} from "../dto/TrainerTrainings";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private baseUrl;
  constructor(private baseUrlService : BaseUrlService,private httpclient:HttpClient) {
    this.baseUrl = baseUrlService.getBaseUrl();
  }


  filterTrainersByUsernames(trainerList: TrainerBasicDetails[], trainerUsernames: string[]): TrainerBasicDetails[] {
    return trainerList.filter((trainer) => trainerUsernames.includes(trainer.userName));
  }

  saveTrainer(trainerDetails:Trainer):Observable<any>{
    return this.httpclient.post(`${this.baseUrl}/trainers/register`,trainerDetails);
  }

  getTrainerProfile(username: string|undefined): Observable<any> {
    return this.httpclient.get<any>(`${this.baseUrl}/trainers?username=${username}`);
  }

  updateTrainer(modifiedTrainer: TrainerUpdateRequest) : Observable<any> {
    const url = `${this.baseUrl}/trainers`;
    console.log('from trainer-service inside update Trainer method '+modifiedTrainer.active)
    return this.httpclient.put<any>(url, modifiedTrainer);
  }

  addTraining(trainingDetails: TrainingDTO): Observable<any> {
    const url = `${this.baseUrl}/trainings`;
    console.log('from trainer-service inside add training method')
    return this.httpclient.post<any>(url, trainingDetails);
  }

  getTrainings(trainerTrainings: TrainerTrainings):Observable<any> {
    const url = `${this.baseUrl}/trainers/trainings`;
    console.log('from trainer-service inside gettraining method')
    return this.httpclient.post<any>(url, trainerTrainings);

  }
}
