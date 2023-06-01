import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signup } from '../data/signup';
import { warehouse } from '../data/warehouse';
import { AccountService } from '../services/account.service';
import { WarehouseService } from '../services/warehouse.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  form!:FormGroup
  liwarehouse!:warehouse[]
  constructor(private formbuilder:FormBuilder,
              private accountservice:AccountService,
              private warehouses:WarehouseService){}
ngOnInit(): void {
  debugger
  this.buildForm()
  this.GetWarehouses()
}
buildForm(){
  this.form=this.formbuilder.group({
      FullName:['',Validators.required],
       Email:['',Validators.compose([Validators.required,Validators.email])],
       Warehouse_Id:['',''],
       Password:['',Validators.required],
       ConfirmPassward:['',Validators.required]
})
}
GetWarehouses(){
this.warehouses.GetAll().subscribe({
  next:data=>{this.liwarehouse=data},
  error:err=>{alert("Error Happened")}
})
}
SignUp(){
  if(this.form.valid){
  var obj=new signup()
  obj.fullName=this.form.value['FullName']
  obj.email=this.form.value['Email']
  obj.warehouse_Id=this.form.value['Warehouse_Id']
  obj.confirmPassward=this.form.value['ConfirmPassward']
  obj.password=this.form.value['Password']
debugger
  this.accountservice.SignUp(obj).subscribe({
    next:data=>{alert("Saved Successfulyy")},
    error:err=>{alert("error happened")}
  })  
}
}
}