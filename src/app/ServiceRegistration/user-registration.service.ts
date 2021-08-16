import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Register } from '../registration/registration';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  baseURL: string="http://localhost:8086/Myuser/register"
  constructor(private http:HttpClient) { 
    
  }
  public doRegistration(registration:Register):Observable<any>{
    return this.http.post(this.baseURL,registration)
  }

  /*public sendStuff():  Observable<any>{
    let params = new HttpParams().set("datetime",new Date().toLocaleString())
    .set("datetime",new Date().toISOString());
    return this.http.post<any>("urlPath../values/show", "Body" , {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      }),
      params
    }); 
  }*/
}
