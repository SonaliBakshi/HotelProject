import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  user: Users = new Users("","","");
  message: any;

  constructor(private service: UserLoginService) { }

  ngOnInit() {
  }
  public registerProcess() {
    let response = this.service.doRegistration(this.user);
    response.subscribe((data) => this.message = data);

  }


}
