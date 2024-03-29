import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ToastarService } from '../toastar.service';


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
  
 
 constructor(private fb: FormBuilder, private api: ApiService, private router: Router, private data: ApiService,private alert : ToastarService) {


  this.formGroup = this.fb.group({

    email:['',[Validators.required, Validators.email]],
   password: ['',Validators.required],
   type: [this.empRecord.type]
  });
 }
  ngOnInit(): void {
    console.log("Login page");
  }

 login(obj:any){
  this.email=obj.email
  this.password=obj.password

  
 this.api.checkuserlogin(this.email).subscribe(data=>{
     console.log(data);

if(data.docs.length <=0){
  this.alert.showError("Invalid Data", "Email doesnot Exist");
}

     else if((data.docs[0].email == this.email)&&(data.docs[0].type == "user")&&(data.docs[0].password==this.password))
     {
    this.alert.showSuccess("successfully","logged in");

       console.log(data.docs[0].firstName);
    const userData = data.docs[0];
     localStorage.setItem('userData',JSON.stringify(userData))
    this.router.navigate(['schedule',data.docs[0].firstName]);
     }
     else if(data.docs[0].password != this.password) {
      this.alert.showError("invalid","password is incorrect")
     }
     else {
    this.alert.showError("enter something","cant login");

     }
    
   
    },rej =>{
     console.log(rej);


    }  )
  
 }

 signup() {
   this.router.navigate(['signup']);
 }

}
  