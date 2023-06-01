import { query } from '@angular/animations';
import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignIn } from '../data/SignIn';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forms!:FormGroup
  name!:string
  en!:string
  constructor(private formBuilder:FormBuilder,
             private accountService:AccountService,
             private router:Router,
             private activated:ActivatedRoute
             ){}

  ngOnInit(): void {
    this.buildForm()  
  }

    buildForm(){
    this.forms=this.formBuilder.group({
      email:[,Validators.compose([Validators.required,Validators.email])],
      password:[,Validators.required],
    })
  }
  onLogin(){
    if(this.forms.valid){
      
      var user=new SignIn()
      user.email=this.forms.value["email"];
      user.password=this.forms.value["password"]
      this.accountService.SignIn(user).subscribe({
        next:data=>{
if(data==false){
  alert("needs to contact support")
}
else{
        localStorage.setItem("userToken",data.token)
this.name=this.forms.value["email"]
this.router.navigate(['/home/Welcome'])
this.accountService.GetuserInfo(this.name).subscribe({
next:data=>{
  debugger
  localStorage.setItem("user", data.fullName)
this.accountService.GetRoles(this.name).subscribe({
next:data=>{
localStorage.setItem("Roles",data[0])
console.log(data[0])
console.log(data)

},
error:err=>{alert("Error Happened")}
})
},
error:err=>{alert("Error Happened")}
})
}
        },
        error:err=>{
          alert("Error happned")
        }
      })
      
    }
  }
}


