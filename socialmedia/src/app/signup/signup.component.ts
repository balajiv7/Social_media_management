import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,NgForm, Validators} from '@angular/forms';
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
   email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
   password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]],
  //  email: ['',Validators.required ],
    //  password:['',Validators.required],
   mobile: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
  //  address:['',Validators.required],
  //   permanentAddress:['',Validators.required],
  //   Aadhar:['',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]],
  //   age:['',[Validators.required,Validators.min(10),Validators.max(100)]]
   
  });
 }
 console.log(this.formGroup)

//  onsubmit(this.formGroup) {
//           this.submitted = true;
//           console.log('Valid?', this.formGroup.valid); // true or false
//           console.log('Email', this.formGroup.value.email);
//           console.log('Password', this.formGroup.value.password);
//       }

  
  
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

storing(Formvalue:any){
    

  var object = {
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
    this.alert.showSuccess("success","data posted")
    console.log(Formvalue.firstName);
   
        console.log("from form",Formvalue);
        this.temp= data.id
        console.log(this.temp);
        console.log("data",this.temp);

        const userData = Formvalue;
        console.log("userData",userData);
        console.log("firstName",Formvalue.firstName);
        localStorage.setItem('userData',JSON.stringify(userData))
        this.route.navigate(['schedule',Formvalue.firstName]);

    },rej =>{
      console.log(rej)
      this.alert.showError("data cant post","error");
    } );}
  }
