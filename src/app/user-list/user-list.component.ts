import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { user } from '../data/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  liUsers!:user[]
  constructor(private router:Router,
              private accountservice:AccountService){}
 ngOnInit(): void {
 this.GetAllusers()
              }
GetAllusers(){
  debugger
  this.accountservice.GetUsers().subscribe({
    
    next:data=>{this.liUsers=data},
    error:err=>{alert("Error happened")}
  })
}
  UserRoles(userId:string){
this.router.navigate(['/home/UserRoles'],{queryParams:{Id:userId}})
  }
  Activate(userId:string){
    
this.accountservice.Activate(userId).subscribe({
  next:data=>
  
  {alert("Success")
  this.GetAllusers()

},
  error:err=>{alert("Failed")}
})
  }

}
