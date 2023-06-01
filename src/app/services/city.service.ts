import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { city } from '../data/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
baseURL=''
  constructor(private httpclient:HttpClient) { 
    this.baseURL=environment.apiUrl+'/api/City'
  }
  GetAll():Observable<any>{
    return this.httpclient.get(this.baseURL+"/CityList")
  }
Delete(id:number):Observable<any>{
  return this.httpclient.get(this.baseURL+"/Delete?id="+id)
}
SaveData(City:city):Observable<any>{
  return this.httpclient.post(this.baseURL+"/NewCity",City)
}
Update(City:city):Observable<any>{
  return this.httpclient.post(this.baseURL+"/Update",City)
}
Edit(id:number):Observable<any>{
  return this.httpclient.get(this.baseURL+"/Edit?id="+id)
}

}
