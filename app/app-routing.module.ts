import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarComponent } from './bar/bar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BoookformComponent } from './boookform/boookform.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 {path:'rooms',component:RoomsComponent},
 {path:'booking',component:BoookformComponent},
 {path:'order',component:ProductComponent},
 {path:'homee',component:HomeComponent},
  {path: 'bar' , component:BarComponent},
  {path:'aboutus', component:AboutusComponent},
  { path: 'p', component: ProductComponent },
	{ path: 'products', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BarComponent,AboutusComponent,RoomsComponent,BoookformComponent,HomeComponent]

export const routing = RouterModule.forRoot(routes);