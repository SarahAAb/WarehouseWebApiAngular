import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { city } from '../data/city';
import { country } from '../data/country';
import { CityService } from '../services/city.service';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-new-city',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.css']
})
export class NewCityComponent implements OnInit{
  licountry!:country[]
  form!:FormGroup
  id!:number
  bag=true
  constructor(private formbuilder:FormBuilder,
               private Ccountryservices:CountryService,
               private cityservices:CityService,
               private activated:ActivatedRoute){}

ngOnInit(): void {
  this.BuildForm()

  this.getallcountry()
 if(this.activated.snapshot.queryParams["Id"]!=undefined){
  this.id=this.activated.snapshot.queryParams["Id"]
  this.Edit(this.id)}
 
 }

BuildForm(){
  this.form=this.formbuilder.group({
    id:['',''],
    CityName:['',Validators.required],
    CountryName:['',Validators.required]})}

getallcountry(){
  this.Ccountryservices.GetAll().subscribe({
    next:data=>{this.licountry=data},
    error:err=>{alert("error happened")}})}

OnSave(){
  if(this.form.valid){
  var obj=new city()
  obj.name=this.form.value['CityName']
  obj.countryId=this.form.value['CountryName']
  this.cityservices.SaveData(obj).subscribe({
next:data=>{alert("Saved Successfully")
this.bag=false},
error:err=>{alert("error happened")}})}}

Edit(id:number){
  this.bag=false
this.cityservices.Edit(this.id).subscribe({
  next:data=>{
    this.form.controls['id'].setValue(data.id) 
    this.form.controls['CityName'].setValue(data.name) 
    this.form.controls['CountryName'].setValue(data.countryId) 
  },
  error:err=>{alert("Error Happened")}})}

Update(){
  if(this.form.valid){
    var obj=new city()
    obj.id=this.form.value['id']
    obj.name=this.form.value['CityName']
    obj.countryId=this.form.value['CountryName']
    this.cityservices.Update(obj).subscribe({
  next:data=>{alert("Updated Successfully")},
  error:err=>{alert("error happened")}})}}
  }
