import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './city-list/city-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { role } from './data/role';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { HomeComponent } from './home/home.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { LoginComponent } from './login/login.component';
import { NewCityComponent } from './new-city/new-city.component';
import { NewCountryComponent } from './new-country/new-country.component';
import { NewItemsComponent } from './new-items/new-items.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
import { RoleListComponent } from './role-list/role-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"error500",component:Error500Component},
  {path:"error404",component:Error404Component},
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[AuthenticationGuard],children:[
    {path:"Welcome",component:WelcomeComponent},
    {path:"NewWarehouse",component:NewWarehouseComponent},
    {path:"WarehouseList",component:WarehouseListComponent},
    {path:"NewItem",component:NewItemsComponent},
    {path:"ItemList",component:ItemsListComponent},
   {path:"UserRoles",component:UserRolesComponent},
    {path:"UserList",component:UserListComponent},
    {path:"NewUser",component:NewUserComponent},
    {path:"NewRole",component:NewRoleComponent},
    {path:"RoleList",component:RoleListComponent},
  {path:"CountryList",component:CountryListComponent},
  {path:"NewCountry",component:NewCountryComponent},
  {path:"NewCity",component:NewCityComponent},
  {path:"CityList",component:CityListComponent}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
