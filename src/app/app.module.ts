import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ContentHomeComponent } from './content-home/content-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    HomePageComponent,
    NavComponent,
    SideMenuComponent,
    ContentHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
