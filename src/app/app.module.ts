import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/*import { AppRouterModule } from './app-router/app-router.module';*/
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
/*import { routingComponents } from './app-router.module';*/
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ModalModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   LoginComponent,
   SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot([
      { path:'', component:HomeComponent},
       { path:'home', component:HomeComponent},
      { path:'login', component:LoginComponent},
      { path:'signup', component:SignupComponent}
      ]),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
