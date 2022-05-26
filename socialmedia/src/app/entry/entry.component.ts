import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
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

     if((data.docs[0].password == this.password)&&(data.docs[0].type == "user"))
     {
       alert("success!!");
       console.log(data.docs[0].firstName);
    //  var hi = this.api.store1(data.docs[0].firstname);
    const userData = data.docs[0];
     localStorage.setItem('userData',JSON.stringify(userData))
  this.router.navigate(['schedule',data.docs[0].firstName]);
     }
     else{
      // this.toastr.warning("Hi Patient wrong authentication,Please enter correct Email and Password");
      alert("Login authentication failed");
     }
    })
  
 }

}
  