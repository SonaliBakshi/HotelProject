import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class UserLoginService {
  
    constructor(private http:HttpClient) { }
  
    //Does a API Call using POST Http Method
    public doRegistration(user: Users) {
      return this.http.post("http://localhost:8081/create", user, {responseType: 'text' as 'json'});
    }
}