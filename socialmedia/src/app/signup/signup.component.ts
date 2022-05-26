import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formGroup: FormGroup;
  empRecord: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
  };
  alluser : any;

  alluserData :any;

  constructor(private fb: FormBuilder , private route: Router, private api : ApiService) {
      
 {
  this.formGroup = this.fb.group({
   firstName: ['',Validators.required],
   lastName: ['',Validators.required],
   email: ['',Validators.required ],
     password:['',Validators.required],
   mobile: ['',Validators.required],
   
  });
 }
 console.log(this.formGroup)

 }
 
 

 ngOnInit(): void {
 }
 get firstName(){
  return this.formGroup.get('firstName')!
 }
 get lastName(){
  return this.formGroup.get('lastName')!
 }
get email() {
 return this.formGroup.get('email')!;
}
get mobile() {
 return this.formGroup.get('mobile')!;
}
get password() {
 return this.formGroup.get('password')!;
}
login() {
  this.route.navigate(['Login']);
}
//pass to another component via api
// storing(formdata: NgForm) {
//  // console.log(formdata);
//  // this.store.pushData(formdata);
// console.log('hi')
// }

storing(Formvalue:any)
 {     
   console.log(Formvalue.email);
  this.api.checkuserlogin(Formvalue.email,Formvalue.password).subscribe(data=>{
   
      console.log(data);
     
      // if((data.docs[0].email == Formvalue.email))
      if((data.docs.length>=1))
      {
       alert("emailid Already Exists");
       window.location.reload();
        
      }
      else{
       alert("Success");
       this.api.storedata(Formvalue).subscribe((data)=>{
        console.log("data returned from server",data);
       })
       const userData = data.docs[0];
       localStorage.setItem('userData',JSON.stringify(userData))
       console.log("firstName",Formvalue.firstName);
     this.route.navigate(['schedule',Formvalue.firstName]);

      }
     }) 
  console.log("from form",Formvalue);
  
 }
fetch() {
 console.log("Hi");
 this.api.login().subscribe((data) => {
  console.log("Data are fetched",data);
 })
}

// onEdit(row:any){
//   this.formGroup.controls['firstName'].setValue(row.firstName);
//   this.formGroup.controls['lastName'].setValue(row.lastName);
//   this.formGroup.controls['email'].setValue(row.email);
//   this.formGroup.controls['password'].setValue(row.password);
//   this.formGroup.controls['mobile'].setValue(row.mobile);
//   this.formGroup.controls['_id'].setValue(row._id);
//   this.formGroup.controls['_rev'].setValue(row._rev);
  
//   this.api.edit("hi").subscribe((data) => {
//     console.log("Data are changed",data);

//   })
// }

signup() {
  this.route.navigate(['Login']);
}

}