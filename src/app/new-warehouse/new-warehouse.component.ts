import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { city } from '../data/city';
import { country } from '../data/country';
import { user } from '../data/user';
import { warehouse } from '../data/warehouse';
import { CityService } from '../services/city.service';
import { CountryService } from '../services/country.service';
import { WarehouseService } from '../services/warehouse.service';

@Component({
  selector: 'app-new-warehouse',
  templateUrl: './new-warehouse.component.html',
  styleUrls: ['./new-warehouse.component.css']
})
export class NewWarehouseComponent implements OnInit {
  bag=true
  form!:FormGroup
  licountry!:country[]
  licity!:city[]
  id!:number
  id1!:number
 

constructor(private formbuilder:FormBuilder,
             private warehouseeervice:WarehouseService,
             private countryservices:CountryService,
             
             private activated:ActivatedRoute){}
ngOnInit(): void {
this.buildform()
this.GetCountries()
if(this.activated.snapshot.queryParams["Id"]!=undefined){
  this.id=this.activated.snapshot.queryParams["Id"]
  this.Edit(this.id)
}
}
GetCountries(){
  this.countryservices.GetAll().subscribe({
    next:data=>{this.licountry=data},
    error:err=>{alert("Error Happened")}
  })
}
GetCities(){
  debugger
this.id1=this.form.value['countryId']
this.warehouseeervice.GetCities(this.id1).subscribe({ 
  next:data=>{this.licity=data},
  error:err=>{alert("Error Happened")}

})
}

buildform(){ 
this.form=this.formbuilder.group({
id:['',''],
name:['',Validators.required],
description:['',''],
countryId:['',Validators.required],
cityId:['',Validators.required],
createdBy:[localStorage.getItem("user"),''],
createdDAT:['','']
 })
}
SaveData(){
  if(this.form.valid){
    var obj=new warehouse()
    obj.name=this.form.value['name']
    obj.description=this.form.value['description']
    obj.cityId=this.form.value['cityId']
    obj.countryId=this.form.value['countryId'] 
    obj.createdBy=this.form.value['createdBy']
    this.warehouseeervice.NewWarehouse(obj).subscribe({
      next:data=>{
       if(data==true){
        alert("Saved Successfully")
        this.bag=false
console.log(obj)
      }
      else
      {alert("Warehouse name already exist")}},
      error:err=>{alert("ErrorHappened")}
    })
  }
}
Edit(id:number){
this.bag=false
this.warehouseeervice.Edit(this.id).subscribe({
next:data=>{
  
 this.form.controls['id'].setValue(data.id)
 this.form.controls['name'].setValue(data.name)
 this.form.controls['description'].setValue(data.description)
 this.form.controls['countryId'].setValue(data.countryId)
 this.GetCities()
 this.form.controls['cityId'].setValue(data.cityId)
 this.form.controls['createdBy'].setValue(data.createdBy)
 this.form.controls['createdDAT'].setValue(data.createdDAT)
},
error:err=>{alert("Error Happened")}
})
}
Update(){
  debugger
  if(this.form.valid){
    var obj=new warehouse()
    obj.id=this.form.value['id']
    obj.name=this.form.value['name']
    obj.description=this.form.value['description']
    obj.cityId=this.form.value['cityId']
    obj.countryId=this.form.value['countryId'] 
    obj.createdBy=this.form.value['createdBy']
    obj.createdDAT=this.form.value['createdDAT']
    this.warehouseeervice.UpdateWarehouse(obj).subscribe({
      next:data=>{alert("Updated Successfully")},
      error:err=>{alert("ErrorHappened")}
    })
  }
}
}
