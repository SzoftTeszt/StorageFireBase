import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { TeniszutoComponent } from './teniszuto/teniszuto.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"list", component:ProductsListComponent},
  {path:"tenisz", component:TeniszutoComponent},
  {path:"", component:HomeComponent},
  {path:"**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
