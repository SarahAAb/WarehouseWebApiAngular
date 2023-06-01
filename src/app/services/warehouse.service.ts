import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { warehouse } from '../data/warehouse';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
baseURL=''
  constructor(private httpclient:HttpClient) {
    this.baseURL=environment.apiUrl+'/api/Warehouse'
   }
  NewWarehouse(obj:warehouse):Observable<any>{
    debugger
    return this.httpclient.post(this.baseURL+"/NewWarehouse",obj)
  }
  GetAll():Observable<any>{
    return this.httpclient.get(this.baseURL+"/WarehouseList")
  }
  Delete(id:number):Observable<any>{
    return this.httpclient.get(this.baseURL+"/Delete?id="+id)
  }
  Edit(id:number):Observable<any>{
    return this.httpclient.get(this.baseURL+"/Edit?id="+id)
  }
  UpdateWarehouse(obj:warehouse):Observable<any>{
    debugger
    return this.httpclient.post(this.baseURL+"/Update",obj)
  }
  GetCities(id:number):Observable<any>{
    debugger
    return this.httpclient.get(this.baseURL+"/Load?countryid="+id)
  }
  view(id:number):Observable<any>{
    
    return this.httpclient.get(this.baseURL+"/View?id="+id)
  }
}
