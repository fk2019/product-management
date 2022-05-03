import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { StarComponent } from './shared/star/star.component';
import { SearchComponent } from './shared/search.component';
import { CheckOutComponent } from './products/check-out.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    ProductDetailComponent,
    StarComponent,
    SearchComponent,
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"welcome", component:WelcomeComponent},
      {path:"products", component:ProductListComponent},
      {path:"products/:id", canActivate:[ProductDetailGuard], component:ProductDetailComponent},
      {path:"search", component:SearchComponent},
      {path:"check-out/:id", component:CheckOutComponent},
      {path:"", redirectTo:"welcome", pathMatch:"full"},
      {path:"**", redirectTo:'welcome', pathMatch:"full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
