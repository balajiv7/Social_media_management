import { fn } from '@angular/compiler/src/output/output_ast';
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
docs:any;
formGroup:FormGroup;
empRecord: any = {
  firstName: '',
  // lastName: '',
  // email: '',
  // password: '',
  // mobile: '',
};


constructor(private fb: FormBuilder , private route: Router, private api : ApiService) {
    
  var fn =JSON.parse(localStorage.getItem('userData'));
  console.log(fn);
  const temp = fn;
   this.getBytype(fn.firstname,fn.email);

{
this.formGroup = this.fb.group({
 firstName: ['',Validators.required]
//  lastName: ['',Validators.required],
//  email: ['',Validators.required ],
//    password:['',Validators.required],
//  mobile: ['',Validators.required],
 
});
}
console.log(this.formGroup)

}



ngOnInit(): void {
}
get firstName(){
return this.formGroup.get('firstName')!
}
// get lastName(){
// return this.formGroup.get('lastName')!
// }
// get email() {
// return this.formGroup.get('email')!;
// }
// get mobile() {
// return this.formGroup.get('mobile')!;
// }
// get password() {
// return this.formGroup.get('password')!;
// }
  view() {
    this.api.get("balaji_trainee").subscribe(res => {
      this.alluser = res;
      console.log(res);
      this.alluser = this.alluser.rows;
      this.alluserData = this.alluser.map((el: any)=>el.doc);
    //  this.api.store(this.alluserData);
      console.log(this.alluserData[0]);
      console.log(this.alluserData);
      alert("Your data was taken successfully!");
      //this.empRecord.reset();
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
  

  getBytype(name,email) {
    
    // var userid = this.api.show();
     console.log(name);
     console.log(email);
    this.api.getByType(name,email,"post",this.fields).subscribe(data =>{
      console.log(data);
     this.temp2 = data;
     this.temp2 = this.temp2.docs;
    //  this.temp3 = this.alluser.map((el: any)=>el.doc);
    //   console.log(this.temp3);
    console.log(this.temp2[0]);
    
    })
  }
  
// onEdit(id,row:any){
//   // this.showAdd=false;
//   // this.showUpdate=true;
//   this.api.viewById(id,this.fields).subscribe(data => {
//     console.log(data);
//     this.temp3 = data;
//     this.temp3 = this.temp3.docs;
//     console.log(this.temp3[0]);
//       console.log(this.temp3[0]);
//       // this.api.store(this.temp3);
//       // console.log("hi");   
//       // this.api.show();    
//   this.formGroup.controls['firstName'].setValue(this.temp3[0].firstName);
//   this.formGroup.controls['lastName'].setValue(this.temp3[0].lastName);
//   this.formGroup.controls['email'].setValue(this.temp3[0].email);
//   this.formGroup.controls['password'].setValue(this.temp3[0].password);
//   this.formGroup.controls['mobile'].setValue(this.temp3[0].mobile);
//   this.formGroup.controls['_id'].setValue(this.temp3[0]._id);
//   this.formGroup.controls['_rev'].setValue(this.temp3[0]._rev);
  
// });

//   this.api.edit("hi").subscribe((data) => {
//     console.log("Data are fetched",data);

//   })
// }
  ViewById(id:any,type:any,email:any) {
    console.log(type);
    this.api.viewById(id,type,email,this.fields).subscribe(data => {
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
  out(){
     localStorage.removeItem('userData'); 
    this.route.navigate(['']);
    // this.api.logout();
  }
  // view1(){
  //   this.route.navigate(['view1']);

  // }
}

