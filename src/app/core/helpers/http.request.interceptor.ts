import {Injectable} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
// @ts-ignore
const httpStatus = require('http-status-codes');
@Injectable()
export class HttpRequestInterceptor {


  constructor (private authenticationService: AuthService) {}

  intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authenticationService.currentUser();
    if ( currentUser && currentUser.token ) {
      request = this.addToken( request, currentUser.token );
    }
    return next.handle(request).pipe(
      catchError(
        ( err, caught ) => {
          if ( err.status === 403 ) {
            // this.handUnauthorizedError(request, next);
          }

          throw err;
        }
      )
    );
  }
  addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
