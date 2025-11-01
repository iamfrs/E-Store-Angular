// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router'; // ✅ Required for <router-outlet>

// import { AppComponent } from './app.component';
// import { HomePageComponent } from './components/home/pages/home-page/home-page.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomePageComponent
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule  // ✅ Required
//   ],
//   providers: [], // ✅ EMPTY or only services here
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home/pages/home-page/home-page.component';

import { AppRoutingModule } from './app-routing.module'; // ✅ Add this

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // ✅ Use AppRoutingModule instead of RouterModule directly
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
