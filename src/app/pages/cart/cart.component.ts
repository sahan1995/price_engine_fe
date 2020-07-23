import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {CommonService} from "../../core/service/common-service/common.service";
import {Services} from "../../core/service/common-service/services";
import {takeUntil} from "rxjs/operators";
import {PriceService} from "../../core/service/common-service/http/services/price.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy{

  destory = new Subject();
  products: any = [];
  cartProducts: any [] = []
  constructor( private service: CommonService, private priceService: PriceService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  ngOnDestroy(): void {
    this.destory.next();
    this.destory.complete();
  }

  getAllProducts() {
    this.service.findAll( Services.PRODUCT, 0).pipe(takeUntil(this.destory)).subscribe( ( response ) => {
      this.products = response;
    })
  }

  addToCart(product){
    product.index = this.cartProducts.length;
    this.cartProducts.push( {...product} );
  }
  remove(index){
    console.log(index)
    this.cartProducts.splice( index , 1);
  }
  calculatePrice() {

    let products = this.cartProducts.map((product) => {
      return {
        id: product.id,
        qty: product.qty,
        type: product.type,
        index: product.index
      }
    });

    this.priceService.calculatePrice(products).pipe( takeUntil(this.destory)).subscribe( (response :any ) => {

      response.lineItems.forEach(( lineItem ) => {

         this.cartProducts.filter((products => products.index === lineItem.index))[0].sub_total = lineItem.sub_total;

      });

      console.log( response )
    })
  }
}
