import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  [x: string]: any;
  formGroup: FormGroup;
  empRecord: any = {
 
   email: '',
   password: '',
   type: 'login'
  };
  email: any;
  password: any;
   
  
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router, private data: ApiService) {
   this.formGroup = this.fb.group({
 
    email: [this.empRecord.email],
    password: [this.empRecord.password],
    type: [this.empRecord.type]
   });
  }
   ngOnInit(): void {
     throw new Error('Method not implemented.');
   }
 
  login(obj:any){
   this.email=obj.email
   this.password=obj.password  
     
  this.api.checkuserlogin(this.email,this.password).subscribe(data=>{
   
      console.log(data);
     
      if((data.docs[0].email==this.email)&&(data.docs[0].password == this.password)&&(data.docs[0].type== "Admin"))
      {
        alert("success!!")
       this.router.navigate(['adminview',this.email]);
      }
      else{
      //  this.toastr.warning("Hi Patient wrong authentication,Please enter correct Email and Password");
       alert("Login authentication failed");
      }
     })
   
  }
 
 }
   