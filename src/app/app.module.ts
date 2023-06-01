import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient,HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCountryComponent } from './new-country/new-country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NewCityComponent } from './new-city/new-city.component';
import { CityListComponent } from './city-list/city-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
import { NewItemsComponent } from './new-items/new-items.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { LoginComponent } from './login/login.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { ErrorHandleInterceptor } from './interceptors/error-handle.interceptor';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCountryComponent,
    CountryListComponent,
    HomeComponent,
    NewCityComponent,
    CityListComponent,
    NewUserComponent,
    UserListComponent,
    NewRoleComponent,
    RoleListComponent,
    UserRolesComponent,
    NewWarehouseComponent,
    NewItemsComponent,
    ItemsListComponent,
    LoginComponent,
    WarehouseListComponent,
    Error404Component,
    Error500Component,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
HttpClientModule,
ReactiveFormsModule,
FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthenticationInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorHandleInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
