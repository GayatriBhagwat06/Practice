import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myscore } from './myscore';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  baseURL:string ='http://localhost:8086/Myscore/';

  constructor(private myhttp:HttpClient) { }
 
  // setScoreService(Myscore:myscore):Observable<any>{
  //   return this.myhttp.post<myscore>(this.baseURL+"addScore"+Myscore,myscore);
  // }

  // setScoreService(Myscore:myscore):Observable<any>{
  //   return this.myhttp.post<myscore>(this.baseURL+"addScore"+Myscore,myscore);
  // }
  setScoreService(Myscore:myscore,userId:number,subjectId:number):Observable<any>{
    return this.myhttp.post<any>(this.baseURL+"addScore/"+userId+"/"+subjectId,Myscore);
  }
}
