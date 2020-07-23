import { Injectable } from '@angular/core';
import {ProductService} from "./http/services/product.service";
import {Services} from "./services";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private productService: ProductService) { }

  public findAll( service, oprions? ) {
    switch (service) {
      case Services.PRODUCT :
        return this.productService.findAll( oprions );
    }
  }
}
