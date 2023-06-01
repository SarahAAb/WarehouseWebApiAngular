import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>
      {
     let msg='';
     switch(error.status){
      case 404:
       this.router.navigate(['/error404'])
        alert("Invalid URL")
        break
        case 401:
          this.router.navigate([''])
          break
          default:
            this.router.navigate(['/error500'])
alert("Error happened")
break

     }
     return throwError(msg)   
      }
    ))
  }
  
}
