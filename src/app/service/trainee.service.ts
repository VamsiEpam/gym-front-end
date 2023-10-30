import { Injectable } from '@angular/core';
import {BaseUrlService} from "./BaseUrlService";
import {HttpClient} from "@angular/common/http";
import {Trainee} from "../model/Trainee";
import {Observable} from "rxjs";
import {TrainerBasicDetails} from "../dto/TrainerBasicDetails";
import {baseUrl} from "../../../environments/dev.environment";
import {TraineeTrainersList} from "../dto/TraineeTrainersList";
import {TraineeUpdateRequest} from "../dto/TraineeUpdateRequest";
import {TraineeTrainingsRequest} from "../dto/TraineeTrainingsRequest";

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  private baseUrl;
  constructor(private httpclient:HttpClient) {
    this.baseUrl = baseUrl
  }

  saveTrainee(traineeDetails:Trainee):Observable<any>{
    return this.httpclient.post(`${this.baseUrl}/trainees/register`,traineeDetails);
  }

  getTraineeProfile(username: string|undefined): Observable<any> {
    return this.httpclient.get<any>(`${this.baseUrl}/trainees?username=${username}`);
  }

  getFreeTrainers(username: string | undefined) : Observable<TrainerBasicDetails[]>{
  return this.httpclient.get<TrainerBasicDetails[]>(`${this.baseUrl}/trainers/trainee?traineeUsername=${username}`);
}

  updateTrainersList(traineeTrainerList: TraineeTrainersList) {
    console.log(traineeTrainerList.traineeUserName)
    return this.httpclient.put(`${this.baseUrl}/trainees/trainers_list`,traineeTrainerList);
  }

  updateTrainee(modifiedTrainee: TraineeUpdateRequest) : Observable<any> {
    const url = `${this.baseUrl}/trainees`;
    return this.httpclient.put<any>(url, modifiedTrainee);
  }

  getTrainings(traineeTrainings: TraineeTrainingsRequest) : Observable<any> {
    const url = `${this.baseUrl}/trainees/trainings`;
    return this.httpclient.post<any>(url, traineeTrainings);
  }
}
