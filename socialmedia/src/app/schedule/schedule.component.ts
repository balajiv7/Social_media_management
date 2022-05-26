import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  formGroup : FormGroup;

  postRecord : any = {
    firstName: '',
    email : '',
    // password : '',
    // mobile : '',
    post : '',
    Date : '',
    Time :'',
    social:'',
    type: 'post'
  };

  constructor(private fb: FormBuilder,private api:ApiService,private route:Router,private authservice :AuthenticationService) {
    
    var fn =JSON.parse(localStorage.getItem('userData'));
    // this.formGroup.patchValue({
    //   firstName:fn.firstName
    // })
    // console.log(fn);
    {
      this.formGroup = this.fb.group({
        firstName : ['',Validators.required],
        email : ['',Validators.required],
        //  password : ['',Validators.required],
        // mobile : ['',Validators.required],
        post : ['',Validators.required],
        Date : ['',Validators.required],
        Time : ['',Validators.required],
        social : ['',Validators.required],
        image : ['',Validators.required],
        type : ['post',Validators.required],
      
      });
    }
    // this.formGroup.value.firstName= fn.firstName
    this.formGroup.controls['firstName'].setValue(fn?.firstName)
    this.formGroup.controls['email'].setValue(fn?.email)
    console.log(this.formGroup);
   }

  ngOnInit(): void {
  }
  get firstName() {
    return this.formGroup.get('firstName')!;
  }
  get email() {
    return this.formGroup.get('email')!;
  }
  // get password() {
  //   return this.formGroup.get('password')!;
  // }
  // get mobile() {
  //   return this.formGroup.get('mobile')!;
  // }
  get post() {
    return this.formGroup.get('post')!;
  }
  get Date() {
    return this.formGroup.get('date')!;
  }
  get Time() {
    return this.formGroup.get('time')!;
  }
  get type() {
    return this.formGroup.get('type')!;
  }
  get social() {
    return this.formGroup.get('social')!;
  }get image() {
    return this.formGroup.get('image')!;
  }
  storing(formdata: NgForm) {
    console.log(formdata);
   
    var objectnew = {
      
      firstName : this.formGroup.value.firstName,
      email : this.formGroup.value.email,
      post : this.formGroup.value.post,
      date : this.formGroup.value.Date,
      time : this.formGroup.value.Time,
      image : this.formGroup.value.image,
      social : this.formGroup.value.social,
      type : this.formGroup.value.type     
  }

    this.api.add("balaji_trainee", objectnew).subscribe(res => {
      this.api.mail(this.formGroup.value).subscribe(res => {
        console.log(res);
      });
      console.log(res);
        // this.api.store(formdata);
      alert("Your data was posted successfully!");

     // this.empRecord.reset();
    }, rej => {
      alert("opps! Can not post data" + rej);
    });
    
  }

  fetch() {
    var viewid = this.api.show2();
    
    console.log(viewid);
    this.route.navigate(['view'],viewid);
    // this.api.store(viewid);

    
  //   this.api.get("balaji_trainee").subscribe(res => {
  //     console.log(res);
  //     alert("Your data was taken successfully!");
  //     //this.empRecord.reset();
  //   }, rej => {
  //     alert("opps! Can not get data" + rej);
  //   });
  }
  fileSelected(event){
    console.log(event)
  }
  
}
