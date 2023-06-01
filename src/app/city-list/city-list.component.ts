import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { city } from '../data/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  licity!:city[]
  constructor(private cityservice:CityService,
               private router:Router){}
  ngOnInit(): void {
    this.GetAllCities()
  }
  GetAllCities(){
    this.cityservice.GetAll().subscribe({
      next:data=>{this.licity=data},
      error:err=>{alert("Error happened")}
    })
  }
  OnEdit(id:number){
this.router.navigate(['/home/NewCity'],{queryParams:{Id:id}})
  }
  OnDelete(id:number){
   this.cityservice.Delete(id).subscribe({
    next:data=>{
      alert("deleted completed");
    this.GetAllCities()},
    error:err=>{alert("error happened")}
    
   })
  }
}
