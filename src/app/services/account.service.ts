import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { role } from '../data/role';
import { SignIn } from '../data/SignIn';
import { signup } from '../data/signup';
import { user } from '../data/user';
import { userroles } from '../data/userrole';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseURL=''
  constructor(private httpclient:HttpClient) {
    this.baseURL=environment.apiUrl+'/api/Account'
   }

  SaveRole(obj:role):Observable<any>{
return this.httpclient.post(this.baseURL+"/NewRole",obj)
  }
  getRole():Observable<any>{
    return this.httpclient.get(this.baseURL+"/RoleList")
  }
  SignUp(obj:signup):Observable<any>{
    return this.httpclient.post(this.baseURL+"/NewUser",obj)
  }
  GetUsers():Observable<any>{
    debugger
    return this.httpclient.get(this.baseURL+"/UserList")
  }
  GetUserRoles(id:number):Observable<any>{
    return this.httpclient.get(this.baseURL+"/UserRoles?UserId="+id)

  }
  Update(obj:userroles[]):Observable<any>{
    return this.httpclient.post(this.baseURL+"/Update",obj)
  }

  Activate(id:string):Observable<any>{
    return this.httpclient.get(this.baseURL+"/Active?userId="+id)

  }
  SignIn(obj:SignIn):Observable<any>{
    return this.httpclient.post(this.baseURL+"/Login",obj)
      }
 LogOut():Observable<any>{
 return this.httpclient.get(this.baseURL+"/LogOut")
 }
 GetuserInfo(name:string):Observable<any>{
  return this.httpclient.get(this.baseURL+"/Created?name="+name)
}
GetRoles(name:string):Observable<any>{
  return this.httpclient.get(this.baseURL+"/GetRoles?username="+name)
}

}
