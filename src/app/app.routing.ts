import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home.component';
import {  LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { StatusComponent } from './status/status.component';
import { ResetComponent } from './reset/reset.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { ReviewComponent } from './review/review.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: "/home-app",
        pathMatch: 'full'
    },
    {
        path: 'home-app',
        component: HomeComponent
    },
     {
        path: 'login-app',
        component: LoginComponent
    },
    {
        path: 'forget-app',
        component: ForgetComponent
    },
    {
        path: 'reset-app',
        component: ResetComponent
    },
    {
        path: 'status-app',
        component: StatusComponent
    },
    {
        path: 'app-view-ticket/:id',
        component: ViewTicketComponent
    },
    {
        path: 'app-review/:id',
        component: ReviewComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);