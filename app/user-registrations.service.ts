import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userss } from './userss';

@Injectable({
    providedIn: 'root'
  })
  export class UserRegistrationsService {
  
    constructor(private http:HttpClient) { }
  
    //Does a API Call using POST Http Method
    public doRegistration(user: Userss) {
      return this.http.post("http://localhost:8081/create", user, {responseType: 'text' as 'json'});
    }
}