import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  //Does a API Call using POST Http Method
  public doRegistration(user: User) {
    return this.http.post("http://localhost:8081/create", user, {responseType: 'text' as 'json'});
  }
 

  //Calling a API using GET Http Request
  // public doSomething() {
  //   response is an observable
  //   let response = this.http.get("URL");
  //   response.subscribe((some_variable_to_store_response) => console.log(some_variable_to_store_response));
  //    CAPTURE THE DATA STORED IN THE VARIABLE AND DISPLAY IT IN INNER HTML 
  // }

}

