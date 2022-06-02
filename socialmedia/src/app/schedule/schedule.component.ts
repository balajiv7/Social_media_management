import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ApiService } from '../api.service';
import { ToastarService } from '../toastar.service';
 

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {



  formGroup : FormGroup;
id : any;
userid:any;
custid  :any;
postid  :any;
fields : any;
temp:any;
mindate : any;

  postRecord : any = {
    firstName: '',
    email : '',
  
    post : '',
    Date : '',
    Time :'',
    social:'',
    image: '',
    type: 'post',
    user : ''
  };
  temp1: any;

  constructor(private fb: FormBuilder,private api:ApiService,private route:Router,private authservice :AuthenticationService,private alert:ToastarService) {
    
    var fn =JSON.parse(localStorage.getItem('userData'));
    this.api.newuserview("user",fn.email).subscribe((data)=> {
      console.log(data);
      this.userid=data
      this.userid=this.userid.rows;
      console.log(this.userid);
      for (const iterator of this.userid) {
        console.log(iterator.id);
        this.custid = iterator.id;
        console.log("custid" , this.custid);
      }
     
  });
   
   
     console.log(fn);
     console.log(fn.email);
    {
      this.formGroup = this.fb.group({
        firstName : ['',Validators.required],
        email : ['',Validators.required],
        post : ['',Validators.required,],
        Date : ['',Validators.required],
        Time : ['',Validators.required],
        social : ['',Validators.required],
        image: [this.image1,Validators.required],
        type : ['post',Validators.required],
        user : ['',Validators.required]
      
      });
    }
   
    this.formGroup.controls['firstName'].setValue(fn?.firstName)
    this.formGroup.controls['email'].setValue(fn?.email)
    console.log(this.formGroup);
   }
   
  ngOnInit(): void {
    this.pastdate()
  }
 

  

  get firstName() {
    return this.formGroup.get('firstName')!;
  }
  get email() {
    return this.formGroup.get('email')!;
  }
  
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
  }
   image1:any='';
   postingapp : object;
   
  storing(formdata: NgForm) {
    console.log(formdata);
   
     var userdetail =JSON.parse(localStorage.getItem('userData'));
     console.log(userdetail._id);
    var objectnew = {      
      firstName : this.formGroup.value.firstName,
      email : this.formGroup.value.email,
      post : this.formGroup.value.post,
      date : this.formGroup.value.Date,
      time : this.formGroup.value.Time,
      user : this.custid
  }
 
  console.log(objectnew.user);

   console.log("hello");
    this.api.storepostdata(objectnew).subscribe((data)=>{
      console.log("hi");
      console.log("data returned from server",data);
      console.log(data.id);
      this.postid = data.id;

      console.log(this.postid);
      this.storingpostinfo(objectnew,this.postid);
     
     })
     console.log(this.custid);


  }


  storingpostinfo(Formvalue:any,postid : any)
  {     


    var postobj = {
      social_1 : this.temp1,
      type : "postinfo",
      post : postid
    }
   console.log(postobj);
    console.log(Formvalue.email);
   
    
     this.api.add("balaji_trainee", postobj).subscribe(res => {
       console.log(res);
       const imageUpload = {
         id : res['id'],
         rev : res['rev'],
         imageData:{"images":this.image1}
       }
        this.api.postingimage(imageUpload).subscribe(data=>{
          console.log(data)
        },err=>{
          console.log(err)
        })
        
            this.alert.showSuccess("success","data posted successfully");


     }, rej => {
   
       console.log(rej);
     });
     this.route.navigate(['signupuserview']);
 
   }

  fetch() {
    this.route.navigate(['view']);
   
  }

  pastdate(){
     var date = new Date();
     var tdydate:any = date.getDate();
     var currentmonth:any = date.getMonth() + 1;
     var currentyear:any = date.getFullYear();
     if (tdydate < 10){
      tdydate = "0" + tdydate;
     }
     if(currentmonth < 10){
      currentmonth = "0" + currentmonth;
     }
     this.mindate = currentyear + "-" + currentmonth + "-" + tdydate;
     console.log(this.mindate);
     
    }
    
    

  




  postSelected(event){
    
    console.log(event);
  this.api.getinfoByType(event,this.fields).subscribe((data =>{
    console.log(data);
  this.temp= data
  this.temp1=this.temp.docs[0]._id;
  console.log(this.temp1);
  }
  ));
   console.log(this.temp1);
    return this.temp1;
   
  }
}
