import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
data:any;
arr:any;
  constructor(private api:ApiService) { 
    console.log(this.api.show());
    this.data = this.api.show();
    // this.temp2 = data;
    //  this.temp2 = this.temp2.docs;
   this.arr = this.data
   
    console.log(this.arr);
}

  ngOnInit(): void {
  }
  view1() {
    console.log(this.api.show());
    this.data = this.api.show();
    // this.temp2 = data;
    //  this.temp2 = this.temp2.docs;
   this.arr = this.data
   
    console.log(this.arr);
  
  }
}
