import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  name;
  price;
  description;
  category;
  // tslint:disable-next-line:variable-name
  sub_category;
  image;
  setproduct: boolean;
  constructor(private http: UserRegistrationService) { }

  ngOnInit() {
  }
addproduct() {
  const data = {
    name: this.name,
    price: this.price,
    description: this.description,
    category: this.category,
    sub_category: this.sub_category,
    image: this.image
  };
  console.log(data);
  this.setproduct = true;
  this.http.doRegistration(data).subscribe((data5) => {
  });
}
}
