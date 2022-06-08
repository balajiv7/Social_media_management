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
  return this.http.post(url,doc,this.httpOptions)
  
}

get(db:string):Observable<{}>{
  const url = this.url+db+'/_all_docs?include_docs=true';
  return this.http.get(url,this.httpOptions);
}

getpostdetails(db:string,keys:any):Observable<{}>{
  const url = this.url+db+'/_all_docs?include_docs=true';
  return this.http.post(url,keys,this.httpOptions);
}

delete(id:string,rev:string):Observable<{}> {

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

getuserByType(type: string, fields: any) {
  let url = this.url + 'balaji_trainee/_find'
  let typedData = {
   selector: {
    type: type,
   },
   fields: fields
  };
  return this.http.post(url, typedData, this.httpOptions);
}


getPostInfoByPostId(id: any, fields: any) {
  let url = this.url + 'balaji_trainee/_find'
  let typedData = {
   selector: {
    type: "postinfo",
    "post" : id
   },
   fields: fields
  };
  return this.http.post(url, typedData, this.httpOptions);
}


getpostinfobyview(type:any,id:any) {
  let url = this.url + 'balaji_trainee/_design/postinfo/_view/postinfo-view?include_docs=true&attachments=true'

  let keys = {"keys" : id.map(el => type+ el)}

  return this.http.post(url,keys,this.httpOptions);
}

getsocialinfobyview(id:any) {
  let url = this.url + 'balaji_trainee/_all_docs?include_docs=true'
 
  let keys = {"keys" : id}

  return this.http.post(url,keys,this.httpOptions);
}

getinfoByType(postapp:any,fields: any) {
  console.log(postapp);
  let url = this.url + 'balaji_trainee/_find'
  let typedData = {
   selector: {
    type: "social",
    "postapp" : postapp
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
      
     },
     fields: fields
    };
    return this.http.post(url, typedData, this.httpOptions);
}

viewByuserId(id:string,email:string,time:any,fields:any) {
  console.log(id);
  let url = this.url + 'balaji_trainee/_find'
    let typedData = {
     selector: {
      "_id": id,
      "email" : email,
      "time" :time
     },
     fields: fields
    };
    return this.http.post(url, typedData, this.httpOptions);
}

getUserPostDetails(id:any)
{
 return this.http.get<any>('http://localhost:8000/getuserdata/'+id);
}


postingimage(imageData) {
   
  const url =`${this.url}balaji_trainee/${imageData.id}/images?rev=${imageData.rev}`
  const header ={ headers: {
    'Authorization' : this.basicAuth,
    'Content-Type': 'image/jpg'
  }}
return this.http.put(url,imageData.imageData,header)
}
show() {
  console.log(this.temp);
  this.route.navigate(['singleview']);
  return this.temp;
}
storedata(formvalue:any)
{
  
  console.log(formvalue);
  return this.http.post<any>('http://localhost:8000/postdata/',formvalue);
}



checkuserlogin(email:any)
 {
  return this.http.get<any>('http://localhost:8000/getdata/'+email);
 }
 checkadminlogin(email:any,password:any)
 {
  return this.http.get<any>('http://localhost:8000/getdata/'+email+'/'+password);
 }



 newuserview(type:any,email:any) {
   let url = this.url+'balaji_trainee/_design/userview/_view/new-userview?include_docs=true'

   let key = {"keys" : [type+email]}
   return this.http.post(url, key, this.httpOptions);
 }
 newpostview(type:any,post:any) {
  let url = this.url+'balaji_trainee/_design/newpost/_view/new-postview?include_docs=true'

  let key = {"keys" : [type+post]}
  return this.http.post(url, key, this.httpOptions);
}

getsocialapps(type:any) {
  let url = this.url+'balaji_trainee/_design/lookup/_view/socialapps_view?include_docs=true'
 let key = {"keys": [type]}
 return this.http.post(url, key, this.httpOptions);

}

storepostdata(formvalue:any)
{

  console.log(formvalue); 
  
  return this.http.post<any>('http://localhost:8000/postdata/id/',formvalue);

}


login(){
  return this.http.get<any>('http://localhost:8000/getdata/');
}

store(data : any) {
  console.log("array ",data);
  this.temp = data;
  console.log(this.temp);
  this.show();
  return this.temp;
  
}
logout() {
  localStorage.removeItem('userData');
  this.route.navigate(['']);
}






}
