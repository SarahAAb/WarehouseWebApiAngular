import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { items } from '../data/items';
import { ItemsService } from '../services/items.service';
import { WarehouseService } from '../services/warehouse.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit{
  liItem!:items[]
  id!:number
  role=localStorage.getItem("Roles")

  constructor(private itemservice:ItemsService,
              private router:Router,
              private activated:ActivatedRoute,
              private ware:WarehouseService){}
  ngOnInit(): void {
    if(this.activated.snapshot.queryParams["Id"]!=undefined){
this.id=this.activated.snapshot.queryParams["Id"]
      this.GetWItems(this.id)
    }
    else{
     this.GetAll() 
    }
    
  }
  Delete(id:number){
this.itemservice.Delete(id).subscribe({
  next:data=>{alert("deleted successed")
this.GetAll()
},
  error:err=>{alert("Error happened")}
})
  }
  Edit(id:number){
this.router.navigate(['/home/NewItem'],{queryParams:{Id:id}})
  }
  GetAll(){
    debugger
    this.itemservice.GetAll().subscribe({
      next:data=>{this.liItem=data},
      error:err=>{alert("Error happened")}
    })

  }
  GetWItems(id:number){
    this.ware.view(this.id).subscribe({
      next:data=>{this.liItem=data},
      error:err=>{alert("Error happened")}
    })

  }
}
