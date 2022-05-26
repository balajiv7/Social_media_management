import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router){ 
  }

  ngOnInit(): void {


  }
signUp(){
  console.log("hi");
this.router.navigate(['signup'])
}
login(){
  console.log("bye");
  this.router.navigate(['Login'])
  }

  adminlogin() {
    console.log("hi admin");
    this.router.navigate(['admin']);
  }
  
}
