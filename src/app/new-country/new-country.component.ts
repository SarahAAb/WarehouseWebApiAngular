import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { country } from '../data/country';
import { CountryService } from '../services/country.service';
@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.css']
})
export class NewCountryComponent implements OnInit {
  form!:FormGroup
  id!:number
  bag=true
  constructor(private formbuilder:FormBuilder,
              private countryservices:CountryService,
              private activatedroute:ActivatedRoute){}
ngOnInit(): void {
  this.buildform() 
  if(this.activatedroute.snapshot.queryParams["Id"]!=undefined){
    this.id=this.activatedroute.snapshot.queryParams["Id"]
    this.edit(this.id)
  }
}
buildform(){
 this.form=this.formbuilder.group({
  id:['',''],

  name:['',Validators.required]
 })
}

OnSave(){
  if(this.form.valid){
 var obj=new country()
 //obj.id=this.form.value['id']
 obj.name=this.form.value['name']
debugger
 this.countryservices.SaveData(obj).subscribe({
  next:data=>{alert("Saved Suceessfully")
  this.bag=false
},
  error:err=>{alert("Error happened")}
  
 })
}
}
edit(id:number){
 this.bag=false
  debugger
this.countryservices.Edit(this.id).subscribe({
next:data=>{
  
  this.form.controls['id'].setValue(data.id)    
  this.form.controls['name'].setValue(data.name)
   
  },
error:err=>{alert("Error Happened")}
})
}
OnUpdate(){
  if(this.form.valid){
    var obj=new country()
    obj.id=this.form.value['id']
    obj.name=this.form.value['name']
  
    this.countryservices.Update(obj).subscribe({
     next:data=>{alert("Updated Suceessfully")},
     error:err=>{alert("Error happened")}
     
    }
)}
}}
