import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { MenuComponent } from './Components/menu/menu.component';
import { PagesComponent } from './Components/pages/pages.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { AboutComponent } from './Components/pages/about/about.component';
import { TeamComponent } from './Components/pages/team/team.component';
import { HelpComponent } from './Components/pages/help/help.component';
import { LoginComponent } from './Components/pages/login/login.component';
import { SignupComponent } from './Components/pages/signup/signup.component';
import { ResetPwComponent } from './Components/pages/reset-pw/reset-pw.component';
import { ForgetPwComponent } from './Components/pages/forget-pw/forget-pw.component';



const appRoutes:Routes = [
    { path : 'home' , component : HomeComponent},
    { path : 'login' , component : LoginComponent},
    { path : 'signup' , component : SignupComponent},
    { path : 'reset' , component : ResetPwComponent},
    { path : 'forget' , component : ForgetPwComponent },


];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
  })
  
export class AppRoutingModule { }
