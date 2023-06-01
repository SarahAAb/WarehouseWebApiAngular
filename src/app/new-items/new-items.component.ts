import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { items } from '../data/items';
import { warehouse } from '../data/warehouse';
import { ItemsService } from '../services/items.service';
import { WarehouseService } from '../services/warehouse.service';

@Component({
  selector: 'app-new-items',
  templateUrl: './new-items.component.html',
  styleUrls: ['./new-items.component.css']
})
export class NewItemsComponent implements OnInit {
  bag=true
  id!:number
form!:FormGroup
liware!:warehouse[]
constructor(private itemsservice:ItemsService,
           private formbuilder:FormBuilder,
          private warehouse:WarehouseService,
          private activated:ActivatedRoute){

}
ngOnInit(): void {
  this.formbuild()
  this.getWarehouses()
  if(this.activated.snapshot.queryParams["Id"]!=undefined){
    this.id=this.activated.snapshot.queryParams["Id"]
    this.Edit(this.id)
  }
}
formbuild(){
  this.form=this.formbuilder.group({
    id:['',''],
    name:['',Validators.required],
    warehouse_Id:['',Validators.required],
    kuCode:['',''],
    qty:['',''],
    costPrice:['',Validators.required],
    msrpPrice:['',''],
    createdBy:[localStorage.getItem("user"),''],
    createdDAT:['',''],
    modifiedBy:['','']
  })
  
}
getWarehouses(){
  this.warehouse.GetAll().subscribe({
    next:data=>{this.liware=data},
    error:err=>{alert("Error Happened")}
  })
}
Edit(id:number){
 this.bag=false
  this.itemsservice.Edit(this.id).subscribe({
next:data=>{
  this.getWarehouses()

    this.form.controls['id'].setValue(data.id)
    this.form.controls['name'].setValue(data.name)
    this.form.controls['warehouse_Id'].setValue(data.warehouse_Id)
    this.form.controls['qty'].setValue(data.qty)
    this.form.controls['kuCode'].setValue(data.kuCode)
    this.form.controls['costPrice'].setValue(data.costPrice)
    this.form.controls['msrpPrice'].setValue(data.msrpPrice)
    this.form.controls['createdBy'].setValue(data.createdBy)
    this.form.controls['createdDAT'].setValue(data.createdDAT)    
    this.form.controls['modifiedBy'].setValue(localStorage.getItem("user"))    

},
error:err=>{alert("Error happened")}
  })
}
Update(){
  debugger
  var obj=new items()
  obj.id=this.form.value['id']
  obj.name=this.form.value['name']
  obj.warehouse_Id=this.form.value['warehouse_Id']
  obj.kuCode=this.form.value['kuCode']
  obj.qty=this.form.value['qty']
  obj.costPrice=this.form.value['costPrice']
  obj.msrpPrice=this.form.value['msrpPrice']
  obj.createdBy=this.form.value['createdBy']
  obj.createdDAT=this.form.value['createdDAT']
  obj.modifiedBy=this.form.value['modifiedBy']

  this.itemsservice.Update(obj).subscribe({
  next:data=>{alert("Updated Success")},
  error:err=>{alert("Error Happned")}
})
}

SaveData(){
  var obj=new items()
  obj.name=this.form.value['name']
  obj.warehouse_Id=this.form.value['warehouse_Id']
  obj.kuCode=this.form.value['kuCode']
  obj.qty=this.form.value['qty']
  obj.costPrice=this.form.value['costPrice']
  obj.msrpPrice=this.form.value['mSRPPrice']
  obj.createdBy=this.form.value['createdBy']
this.itemsservice.Insert(obj).subscribe({
  next:data=>{
    if(data==true){
     alert("Saved Successfully")
    this.bag=false}
   else
   {alert("Warehouse name already exist")}},
   error:err=>{alert("ErrorHappened")}})
}
}
