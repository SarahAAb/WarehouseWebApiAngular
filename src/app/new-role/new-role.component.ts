import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { role } from '../data/role';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent implements OnInit {
  forms!:FormGroup
constructor(private formbuilder:FormBuilder
            ,private accountservice:AccountService ) {
              
            }
ngOnInit(): void {
  
  this.forms=this.formbuilder.group({
    name:['',Validators.required]
  })
}
onSave(){
  if(this.forms.valid){
  var obj=new role()
  obj.name=this.forms.value['name']
  
this.accountservice.SaveRole(obj).subscribe({
  next:data=>{alert("Saved Successfully")},
  error:err=>{alert("Error Happened")}
})
}
}}
