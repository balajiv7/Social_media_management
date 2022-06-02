import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
data:any;
arr:any =[];
public userData:any;

  constructor(private api:ApiService) { 

    var fn =JSON.parse(localStorage.getItem('userData'));
    console.log(fn);
    this.userData = fn
    const temp = fn;

    console.log(this.api.show());
    this.data = this.api.show();
  
   this.arr = this.data
   
   console.log(this.arr);
   console.log(this.arr.post);
   console.log(this.data.post);

   this.view1();
    
}

  ngOnInit(): void {
  }
  view1() {
    console.log(this.api.show());
    this.data = this.api.show();

   this.arr = this.data
   
    console.log(this.arr);
  
  }
}
