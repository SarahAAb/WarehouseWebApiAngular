import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { warehouse } from '../data/warehouse';
import { WarehouseService } from '../services/warehouse.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {
  liware!:warehouse[]
  constructor(private ware:WarehouseService,
              private router:Router){}
  ngOnInit(): void {
    this.Getall()
  }
  Getall(){
this.ware.GetAll().subscribe({
  next:data=>{this.liware=data},
  error:err=>{alert("Error happened")}
})
  }
  OnEdit(id:number){
this.router.navigate(['/home/NewWarehouse'],{queryParams:{Id:id}})
  }
  OnDelete(id:number){
this.ware.Delete(id).subscribe({
  next:data=>{alert("Deleted Successed")
this.Getall()
},
  error:err=>{alert("Error happened")}
})
  }
  view(id:number){
    this.router.navigate(['/home/ItemList'],{queryParams:{Id:id}})
  }
}
