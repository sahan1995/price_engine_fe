import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import {MatExpansionModule} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [HomeComponent, CartComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatExpansionModule,
    FormsModule,
  ]
})
export class PagesModule { }
