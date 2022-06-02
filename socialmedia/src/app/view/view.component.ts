import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  [x: string]: any;
alluser : any;
alluserData :any;
fields:any;
temp2 :any;
socialdetails:any;
socialapp : any;
ids = [];
postinfo:[];
postinformation : any;
element:[];
rows:any
docs:any;
formGroup:FormGroup;
socialids = [];

postids :[] ;
empRecord: any = {
  firstName: '',
};

public userData:any;
constructor(private fb: FormBuilder , private route: Router, private api : ApiService) {
    
  let fn =JSON.parse(localStorage.getItem('userData'));
  console.log(fn);
  this.userData = fn
 
   this.getBytype(fn._id);

{
this.formGroup = this.fb.group({
 firstName: ['',Validators.required]
});
}
console.log(this.formGroup)

}



ngOnInit(): void {
  console.log("view");
}
get firstName(){
return this.formGroup.get('firstName')!
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
  

  getBytype(id:any) {
    
     this.api.getUserPostDetails(id).subscribe(data =>{
     this.temp2 = data;
     this.temp2 = this.temp2.docs;
    console.log(this.temp2);
      
      for (let temp of this.temp2) {
        this.element = temp;
     }
      console.log("postIDSfulldocs",this.temp2);

      for (let index = 0; index < this.temp2.length; index++) {
          this.ids[index] = this.temp2[index]._id 
      }
      
  

    this.api.getpostinfobyview("postinfo",this.ids).subscribe((res:any)=>{
      console.log(res);
     this.socialdetails = res.rows

     this.socialdetails = this.socialdetails.map(el=>el.doc)
     console.log(this.socialdetails)
     this.socialids = [];
  
     for (let social of this.socialdetails) {
      const socialids = social
      if(socialids && socialids['social_1'] && !this.socialids.includes(socialids['social_1'])){
        this.socialids.push(socialids['social_1']) ;
      }

     }
   console.log("SOCIALIDS",this.socialids);

     this.api.getsocialinfobyview(this.socialids).subscribe((result:any) => {
       console.log(result);
      this.socialapp = result.rows.map(el=>el.doc);
      this.temp2.forEach(element => {
       
       const postinfo = this.socialdetails.filter(el=>el.post === element['_id'] )[0]
       if(postinfo && postinfo['social_1']){
       const social = this.socialapp.filter(el=>el['_id'] === postinfo['social_1'] )[0]
       element['social'] = social['postapp']
       element['image'] = postinfo['image']
      }
      
      });
      console.log("SOCIALAPP DETAILS",this.socialapp);
     })

    })
    console.log(this.socialdetails);


    console.log(this.postinformation);


    console.log(data[0]);
    console.log(data[1]);
    console.log("temp2",this.temp2)
    console.log(this.temp2[0]);
    
    })
  }
  

  ViewById(id:any,type:any,email:any,time:any) {
    console.log(type);
    this.api .viewByuserId(id,email,time,this.fields).subscribe(data => {
      console.log(data);
      this.temp3 = data;
      this.temp3 = this.temp3.docs;
      console.log(this.temp3[0]);
        console.log(this.temp3[0]);
        this.api.store(this.temp3);
        console.log("hi");   
        this.api.show();    
    });
  }


  ViewBYIndividual(id:any,temp3:any) {
    for (const element of temp3) {
      if(element._id == id){
        this.api.store(element);
        console.log("hi");
        this.api.show();
      }
      
    }

  }

  out(){
     localStorage.removeItem('userData'); 
    this.route.navigate(['']);
    
  }
 }

