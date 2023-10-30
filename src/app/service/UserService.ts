import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable, of} from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import {BaseUrlService} from "./BaseUrlService";
import {Credentials} from "../model/Credentials";
import {Trainee} from "../model/Trainee";
import {Trainer} from "../model/Trainer";
import {baseUrl} from "../../../environments/dev.environment";
import {ModifyCredentialsDetails} from "../model/ModifyCredentialsDetails";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl;

  constructor( private httpclient: HttpClient) {
    this.baseUrl = baseUrl;
  }

  updatePassword(modifyCredentialsDetails : ModifyCredentialsDetails): Observable<any> {
    const url = `${this.baseUrl}/users/update`;
    return this.httpclient.put<boolean>(url, modifyCredentialsDetails);
  }
}

