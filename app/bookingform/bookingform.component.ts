import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from './../user-registration.service';
import { User } from './../user';
@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {

  user: User = new User("","",0);
  message: any;
  
  constructor(private service: UserRegistrationService) { }
  
  ngOnInit() {
  }
  
  
  public registerProcess() {
    let response = this.service.doRegistration(this.user);
    response.subscribe((data) => this.message = data);
  
  }
  
}
