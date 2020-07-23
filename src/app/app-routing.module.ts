import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";
import {NavigationBarComponent} from "./layout/navigation-bar/navigation-bar.component";

const routes: Routes = [
  {path: '', component: NavigationBarComponent, loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
