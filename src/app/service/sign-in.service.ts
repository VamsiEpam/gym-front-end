import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Credentials} from "../model/Credentials";
import {baseUrl} from "../../../environments/dev.environment";

@Injectable({
  providedIn: 'root'
})
export class SignInService {


  private baseUrl;
  constructor( private httpclient:HttpClient) {
    this.baseUrl = baseUrl
  }
  userAuthentication(credentials: Credentials): Observable<boolean> {
    const url = `${this.baseUrl}/users/login`;
    return this.httpclient.post<boolean>(url, credentials);
  }
  updateCredentials(credentials: Credentials, newPassword: string): Observable<void> {
    const url = `${this.baseUrl}/users/update?newPassword=${newPassword}`;
    return this.httpclient.put<void>(url, credentials);
  }
}
