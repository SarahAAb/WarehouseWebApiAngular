import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userroles } from '../data/userrole';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {
  id!:number
  Userroles!:userroles[]
  constructor(private activatedroute:ActivatedRoute,
              private accountservice:AccountService){}
ngOnInit(): void {
  if( this.activatedroute.snapshot.queryParams["Id"]!=undefined)
  {
   this.id= this.activatedroute.snapshot.queryParams["Id"]
   this.getUserRoles()
  }

}
getUserRoles(){
this.accountservice.GetUserRoles(this.id).subscribe({
  next:data=>{this.Userroles=data},
  error:err=>{alert("Error happened")}
})
}
onUpdate(userRoles:userroles[]){
  this.accountservice.Update(userRoles).subscribe({
    next:data=>{alert("Updated Successfully")},
    error:err=>{alert("Error Happend")}
  })
}

}
