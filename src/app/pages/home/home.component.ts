import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {CommonService} from "../../core/service/common-service/common.service";
import {Services} from "../../core/service/common-service/services";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  destory = new Subject();
  products: any = [];
  constructor( private service: CommonService ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  ngOnDestroy(): void {
    this.destory.next();
    this.destory.complete();
  }


  getAllProducts() {
    this.service.findAll(Services.PRODUCT, 50).pipe(takeUntil(this.destory)).subscribe( ( products ) => {
      this.products = products;
    })
  }
}
