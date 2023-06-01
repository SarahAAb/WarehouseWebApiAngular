import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    showDropdown:boolean = false;
name!:string
role=localStorage.getItem("Roles")
  constructor(private activated:ActivatedRoute,
              private accountservice:AccountService,
              private router:Router){}
ngOnInit(): void {
}
OpenNav(){
  debugger

  this.showDropdown=true
}
closeNav(){
  this.showDropdown=false
}
logout(){
  this.accountservice.LogOut().subscribe({
    next:data=>{alert("done")
  this.router.navigate(['/'])
  },
    error:err=>{alert("Error happened")}
  })
}

}
