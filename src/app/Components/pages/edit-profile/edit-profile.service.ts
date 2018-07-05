import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EditProfileComponent } from './edit-profile.component';
import { EditProfile } from './edit-profile.model';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class EditProfileService{

server = 'http://127.0.0.1:8000/';
headers: Headers = new Headers;
options: any;

constructor(private __http: Http) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    this.options = new RequestOptions({headers: this.headers});
}

EditProfile(EditProfile:EditProfile){
  const data = EditProfile ;
  console.log(EditProfile.id);
  return this.__http.post(this.server + 'api/editPost/'+ `${EditProfile.id} `,JSON.stringify(data), this.options) ;
  }
}
