import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { BlogComponent } from './blog/blog.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ViewComponent } from './view/view.component';
import { ResourcesComponent } from './resources/resources.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SignupuserviewComponent } from './signupuserview/signupuserview.component';
import { SingleviewComponent } from './singleview/singleview.component';


const routes: Routes = [ 
  {path:'', component : HomeComponent},
  {path :'Login', component : EntryComponent},
  {path :'signup', component:SignupComponent},
  {path :'blog', component:BlogComponent},
  {path :'schedule/:id', component:ScheduleComponent},
  {path : 'view', component:ViewComponent},
  {path : 'about' , component:ResourcesComponent},
  
  {path : 'singleview', component : SingleviewComponent},
  {path:'news',component:NewsComponent},
  {path:'contact',component:ContactComponent},
  {path:'scheduleview',component:SignupuserviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
