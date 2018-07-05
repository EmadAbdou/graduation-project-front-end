import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { Material } from './material.module';
import { PagesComponent } from './Components/pages/pages.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { AboutComponent } from './Components/pages/about/about.component';
import { TeamComponent } from './Components/pages/team/team.component';
import { HelpComponent } from './Components/pages/help/help.component';
import { LoginComponent } from './Components/pages/login/login.component';
import { SignupComponent } from './Components/pages/signup/signup.component';
import { ResetPwComponent } from './Components/pages/reset-pw/reset-pw.component';
import { ForgetPwComponent } from './Components/pages/forget-pw/forget-pw.component';
import { AddPostComponent } from  './Components/pages/add-post/add-post.component';
import { ProfileComponent } from  './Components/pages/profile/profile.component';
import { PostDetailsComponent } from './Components/pages/post-details/post-details.component';
import { EditPostComponent } from './Components/pages/edit-post/edit-post.component';
import { EditProfileComponent } from './Components/pages/edit-profile/edit-profile.component';
import { SearchResultComponent } from './Components/pages/search-result/search-result.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PagesComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    HelpComponent,
    LoginComponent,
    SignupComponent,
    ResetPwComponent,
    ForgetPwComponent,
    AddPostComponent,
    ProfileComponent,
    PostDetailsComponent,
    EditPostComponent,
    EditProfileComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Material,
    FormsModule,
    RouterModule.forRoot([
      { path : 'home' , component : HomeComponent},
      { path : 'login' , component : LoginComponent},
      { path : 'signup' , component : SignupComponent},
      { path : 'reset' , component : ResetPwComponent},
      { path : 'forget' , component : ForgetPwComponent},
      { path : 'addPost' , component : AddPostComponent },
      { path : 'profile' , component : ProfileComponent },
      { path : 'post-details' , component : PostDetailsComponent },
      { path : 'edit-post' , component : EditPostComponent},
      { path : 'edit-profile' , component : EditProfileComponent},
      { path : 'search-result' , component : SearchResultComponent}


  ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
