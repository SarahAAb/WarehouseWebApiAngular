import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { country } from '../data/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  ecountry!:country
  licountry!:country[]
  constructor(private countryservice:CountryService,
              private router:Router){}
ngOnInit() {
  this.GetAllCountries()
}
GetAllCountries(){
this.countryservice.GetAll().subscribe({next:data=>{this.licountry=data},
error:err=>{alert("error happened")}
})
}
OnEdit(id:number){
  debugger
  this.router.navigate(['/home/NewCountry'],{queryParams:{Id:id}})
}
OnDelete(id:number){
  
this.countryservice.Delete(id).subscribe({
  next:data=>{
    alert("Deleted Successfully")
    this.GetAllCountries()

  },
  error:err=>{alert("error happened")}
})
}
}
