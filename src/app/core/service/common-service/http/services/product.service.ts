import { Injectable } from '@angular/core';
import {HttpService} from "../http.service";
import {environment} from "../../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpService) { }

  public findAll( units ) {
    return this.http.get( environment.serverURL +  'products/?productUnits='+ units);
  }
}
