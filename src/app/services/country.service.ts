import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { country } from '../data/country';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
baseURL=''
  constructor(private httpclient:HttpClient) { 
    this.baseURL=environment.apiUrl+'/api/Country'
  }

  GetAll():Observable<any>{
  return  this.httpclient.get(this.baseURL+"/CountryList")
  }
  Edit(id:number):Observable<any>{
    debugger
    return this.httpclient.get(this.baseURL+"/Edit?id="+id)
  }
  Delete(id:number):Observable<any>{
 return this.httpclient.get(this.baseURL+"/Delete?id="+id)
  }
  SaveData(obj:country):Observable<any>{
    return this.httpclient.post(this.baseURL+"/NewCountry",obj)
  }
  Update(obj:country):Observable<any>{
    return this.httpclient.post(this.baseURL+"/Update",obj)
  }

}
