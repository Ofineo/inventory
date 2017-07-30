import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from "./home/welcome.component";
import { ProductModule } from './products/product.module';


@NgModule({
  imports: [
    //every browser application must import and its always on tje root module. 
    //other modules import the commonModule instead. in fact this module imports and exports 
    //common module which declares exports directive as NgIf and NgFor
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
