import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit 
{
  data:any;
  arr:any =[];
  public userData:any;
  
    constructor(private api:ApiService,private route : Router) { 
  
      const fn =JSON.parse(localStorage.getItem('userData'));
      console.log(fn);
      this.userData = fn
   
  
      console.log(this.api.show());
      this.data = this.api.show();
    
     this.arr = this.data
     
     console.log(this.arr);
     console.log(this.arr.post);
     console.log(this.data.post);
  
     this.singleView();
      
  }
  
    ngOnInit(): void {
      console.log("single view");
    }
    singleView() {
      console.log(this.api.show());
      this.data = this.api.show();
  
     this.arr = this.data
     
      console.log(this.arr);
    
    }
    back() { 
      this.route.navigate(['view']);
    }
  }
  