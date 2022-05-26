import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
alluser:any;
alluserData:any;
fields:any;
temp3:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  view() {
    this.api.get("balaji_trainee").subscribe(res => {
      this.alluser = res;
      console.log(res);
      this.alluser = this.alluser.rows;
      this.alluserData = this.alluser.map((el: any)=>el.doc);
  
      console.log(this.alluserData[0]);
      console.log(this.alluserData);
      alert("Your data was taken successfully!");

    }, rej => {
      alert("opps! Can not get data" + rej);
    });
  }
  erase(id:string,rev:string) {
      this.api.delete(id,rev).subscribe(data => {
        console.log(data);
        window.location.reload();
      })
  }
  // ViewById(id:string) {
  //   console.log(id);
  //   this.api.viewById(id,this.,this.fields).subscribe(data => {
  //     console.log(data);
  //     this.temp3 = data;
  //     this.temp3 = this.temp3.docs;
  //     console.log(this.temp3[0]);
  //       console.log(this.temp3[0]);
  //       this.api.store(this.temp3);
  //       console.log("hi");   
  //       this.api.show();    
  //   });
  // }

}
