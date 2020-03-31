import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  message :String=""
  constructor() { }

  ngOnInit() {
  }
  additems()
  {
    this.message="Item Added";
  }
  removeitems()
  {
    this.message="Item Removed";
  }
}
