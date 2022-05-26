import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  url = 'https://5804af1c-53d6-4cc1-b0eb-5219a1cc5775-bluemix.cloudantnosqldb.appdomain.cloud/';
  dbUserName = 'apikey-v2-380rhhqzbqk6eifbn30gvuevzk9903pdrrsd7f8ipknj';
  dbPassword = 'ee0e39016c30dc0fc4fd04d12a420174';
  basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
constructor(private http:HttpClient,private route:Router) { }

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization' : this.basicAuth
  })
};

add(db:string,doc: object):Observable<{}> {

  const url = this.url+db;
  // this.mail(doc);
  return this.http.post(url,doc,this.httpOptions)
  
}

get(db:string):Observable<{}>{
  const url = this.url+db+'/_all_docs?include_docs=true';
  return this.http.get(url,this.httpOptions);
}
delete(id:string,rev:string):Observable<{}> {
  // const url = this.url+'balaji_trainee/' +id+ '/?rev' +rev;
  const urld = this.url + 'balaji_trainee/' + id + '/?rev=' + rev;

  return this.http.delete(urld,this.httpOptions);
}
getByType(username:any,email:any,type: string, fields: any) {
    let url = this.url + 'balaji_trainee/_find'
    let typedData = {
     selector: {
      type: type,
      firstName:username,
      email : email
     
     },
     fields: fields
    };
    return this.http.post(url, typedData, this.httpOptions);
}
viewById(id:string,type:string,email:string,fields:any) {
  console.log(id);
  let url = this.url + 'balaji_trainee/_find'
    let typedData = {
     selector: {
      "type": type,
      "email" : email,
      "_id" : id
      // "post_id" : id,
      // "post1_id": id
     },
     fields: fields
    };
    return this.http.post(url, typedData, this.httpOptions);
}
show() {
  console.log(this.temp);
  this.route.navigate(['view1']);
  return this.temp;
}
show2(){
  console.log(this.temp);
  return this.temp;
}
checkuserlogin(email:any,password:any)
 {
  return this.http.get<any>('http://localhost:8000/getdata/'+email);
 }

 edit(details:any) {
   return this.http.put<any>('http://localhost:8000//update_query/',details);
 }

storedata(formvalue:any)
{
  console.log(formvalue);
  return this.http.post<any>('http://localhost:8000/postdata/',formvalue);
  // return this.http.post<any>('http://localhost:8000/mail/',formvalue)
}
mail(formvalue:any){
  console.log(formvalue);
  return this.http.post<any>('http://localhost:8000/mail/',formvalue);

}
login(){
  return this.http.get<any>('http://localhost:8000/getdata/');
}

store(data : any) {
  console.log("array ",data);
  this.temp = data;
  console.log(this.temp);
  this.show();
  this.pusharray.push(data)
  console.log(this.temp);
  this.temp5 = this.data;
 
  return this.temp;
  
}
logout() {
  localStorage.removeItem('userData');
  this.route.navigate(['home']);

}

store1(data : any) {
  console.log("array ",data);
  this.temp = data;

  this.show2();
  this.pusharray.push(data)
  console.log(this.temp);
  this.temp5 = this.data;
 
  return this.temp;
  
}





}
