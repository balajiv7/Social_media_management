import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  // [x: string]: Object;
  docs:any;
  temp2:any;
  fields:any;
  name:any;

  constructor(private api:ApiService) {
    var fn =JSON.parse(localStorage.getItem('userData'));
    console.log(fn);
    const temp = fn;
     this.getBytype(fn.firstname,fn.email);     
   }

  ngOnInit(): void {
  }
 
  getBytype(name,email) {
    
    // var userid = this.api.show();
     console.log(name);
     console.log(email);
    this.api.getinfoByType(email,this.fields).subscribe(data =>{
      console.log(data);
     this.temp2 = data;
     this.temp2 = this.temp2.docs;
    //  this.temp3 = this.alluser.map((el: any)=>el.doc);
    //   console.log(this.temp3);
    console.log(this.temp2[0]);
    
    })
  }
  
}
