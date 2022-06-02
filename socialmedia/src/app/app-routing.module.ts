import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { BlogComponent } from './blog/blog.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ViewComponent } from './view/view.component';
import { ResourcesComponent } from './resources/resources.component';
import { View1Component } from './view1/view1.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SignupuserviewComponent } from './signupuserview/signupuserview.component';


const routes: Routes = [ 
  {path:'', component : HomeComponent},
  {path :'Login', component : EntryComponent},
  {path :'signup', component:SignupComponent},
  {path :'blog', component:BlogComponent},
  {path :'schedule/:id', component:ScheduleComponent},
  {path : 'view', component:ViewComponent},
  {path : 'about' , component:ResourcesComponent},
  {path : 'view1' , component:View1Component},
  {path:'news',component:NewsComponent},
  {path:'contact',component:ContactComponent},
  {path:'signupuserview',component:SignupuserviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
