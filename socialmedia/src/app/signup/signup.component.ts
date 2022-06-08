import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ToastarService } from '../toastar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  [x: string]: any;
  submitted:true;

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

  constructor(private fb: FormBuilder , private route: Router, private api : ApiService,private alert : ToastarService) {
      
 {
  this.formGroup = this.fb.group({
   firstName: ['',Validators.required],
   lastName: ['',Validators.required],
   email:['',[Validators.required, Validators.email]],
   password: ['',[Validators.required]],

   mobile: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
 
   
  });
 }
 console.log(this.formGroup)



  
  
 }
 
 

 ngOnInit(): void {
 
  console.log("signup page");
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


storing(Formvalue:any){
    

  const object = {
    firstName: Formvalue.firstName,
    lastName: Formvalue.lastName,
    email: Formvalue.email,
    password: Formvalue.password,
    mobile: Formvalue.mobile,
    }
  
  console.log(object);
   console.log(Formvalue.email);  

   this.api.storedata(object).subscribe((data)=>{
    console.log("data returned from server",data);
    this.alert.showSuccess("success","data posted");
    this.route.navigate(['Login']);
    

    console.log(Formvalue.firstName);
   
       

    },rej =>{
      console.log(rej)

    }  
    );}

  }
