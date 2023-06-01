import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { items } from '../data/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
baseURL=''
  constructor(private httpclient:HttpClient) {
    this.baseURL=environment.apiUrl+'/api/Item'
   }
  Insert(obj:items):Observable<any>{
    return this.httpclient.post(this.baseURL+"/NewItem",obj)
  }

  Delete(id:number):Observable<any>{
    return this.httpclient.get(this.baseURL+"/Delete?id="+id)
  }
  Edit(id:number):Observable<any>{
    return this.httpclient.get(this.baseURL+"/Edit?id="+id)
  }
  Update(obj:items):Observable<any>{
    return this.httpclient.post(this.baseURL+"/Update",obj)
  }
  GetAll():Observable<any>{
    return this.httpclient.get(this.baseURL+"/ItemList")
  }

}
