import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
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

onEdit(row:any){
  this.formGroup.controls['firstName'].setValue(row.firstName);
  this.formGroup.controls['lastName'].setValue(row.lastName);
  this.formGroup.controls['email'].setValue(row.email);
  this.formGroup.controls['password'].setValue(row.password);
  this.formGroup.controls['mobile'].setValue(row.mobile);
  this.formGroup.controls['_id'].setValue(row._id);
  this.formGroup.controls['_rev'].setValue(row._rev);
  
  this.api.edit("hi").subscribe((data) => {
    console.log("Data are changed",data);

  })
}
}