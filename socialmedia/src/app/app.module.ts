import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleComponent } from './schedule/schedule.component';
import { ViewComponent } from './view/view.component';
import { ResourcesComponent } from './resources/resources.component';
import { View1Component } from './view1/view1.component';
import { AdminComponent } from './admin/admin.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { UpdateComponent } from './update/update.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
// import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    HomeComponent,
    SignupComponent,
    BlogComponent,
    ScheduleComponent,
    ViewComponent,
    ResourcesComponent,
    View1Component,
    AdminComponent,
    AdminviewComponent,
    UpdateComponent,
    NavComponent,
    FooterComponent,
    NewsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
