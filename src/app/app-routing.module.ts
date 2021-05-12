import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CartsComponent } from './pages/carts/carts.component';
import {HomeComponent} from './pages/home/home.component';
import {ItemDetailComponent} from './pages/item-detail/item-detail.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "foodDetail/:id", component: ItemDetailComponent},
  {path:'cart',component:CartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
