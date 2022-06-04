import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ScheduleComponent } from './schedule/schedule.component';
import { ViewComponent } from './view/view.component';
import { ResourcesComponent } from './resources/resources.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SingleviewComponent } from './singleview/singleview.component';
 import { ToastrModule } from 'ngx-toastr';
import { HttpCallInterceptorService } from './http-call-interceptor.service';
import { SignupuserviewComponent } from './signupuserview/signupuserview.component';
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
    NavComponent,
    FooterComponent,
    NewsComponent,
    ContactComponent,
    SignupuserviewComponent,
    SingleviewComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers:[ {provide: HTTP_INTERCEPTORS,
    useClass: HttpCallInterceptorService,
    multi: true}]
,
  bootstrap: [AppComponent]
})
export class AppModule { }
