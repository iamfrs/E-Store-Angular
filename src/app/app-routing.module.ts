import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home/pages/home-page/home-page.component';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


const routes: Routes = [
  { path: '', 
      component: HomePageComponent,
    // redirectTo: 'orders', pathMatch: 'full'
   },
  // {
  //   path: 'orders',
  //   loadChildren: () =>
  //     import('./features/orders/orders.module').then(m => m.OrdersModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled", // Restores the scroll position
      anchorScrolling: "enabled", // Enables scrolling to anchor links
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

