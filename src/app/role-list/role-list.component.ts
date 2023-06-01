import { Component, OnInit } from '@angular/core';
import { getAllJSDocTags } from 'typescript';
import { role } from '../data/role';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
   liroles!:role[]

  constructor(private accountservice:AccountService){}
ngOnInit(): void {
  this.getroles()
}
getroles(){
  this.accountservice.getRole().subscribe({
    next:data=>{this.liroles=data},
    error:err=>{alert("Error Happened")}
  })
}
}
