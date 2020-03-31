import { Component, OnInit } from '@angular/core';
import { Userss } from '../userss';
import { UserRegistrationsService } from '../user-registrations.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: Userss = new Userss("","",0,"","");
  message: any;

  constructor(private service: UserRegistrationsService) { }

  ngOnInit() {
  }

  
  public registerProcess() {
    let response = this.service.doRegistration(this.user);
    response.subscribe((data) => this.message = data);

  }
}
