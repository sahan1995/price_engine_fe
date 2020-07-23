import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient) { }

  public get<T> ( url ) {
    return this.http.get<T>( url );
  }

  public post<T> ( url, body ) {
    return this.http.post<T>( url, body );
  }

  public put<T> ( url, body ) {
    return this.http.put<T>( url, body );
  }

  public delete<T> ( url ) {
    return this.http.delete<T>( url );
  }
}
