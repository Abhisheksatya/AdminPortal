import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { routing } from './app.routing'
import { AppComponent } from './app.component';
 import { HomeComponent} from './components/home.component';
import {NavbarComponent } from './Nav-bar/Nav-bar.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { TicketService } from './services/ticket.service';
import { ForgetComponent } from './forget/forget.component';
import { ForgetService } from './services/forget.service';
import { StatusComponent } from './status/status.component';
import { ResetComponent } from './reset/reset.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { ReviewComponent } from './review/review.component';
import { ReviewService } from './services/review.service';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ForgetComponent,
    StatusComponent,
    ResetComponent,
    ViewTicketComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    routing,
    Ng2SearchPipeModule 
  ],
  providers: [
  LoginService,
  TicketService,
  ForgetService,
  ReviewService
],bootstrap: [AppComponent]
})
export class AppModule { }
