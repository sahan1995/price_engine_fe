import { Injectable } from '@angular/core';
import {HttpService} from "../http.service";
import {environment} from "../../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor( private http: HttpService ) { }

  public calculatePrice( productList ) {
    return this.http.put( environment.serverURL + 'calculate', productList)
  }
}
