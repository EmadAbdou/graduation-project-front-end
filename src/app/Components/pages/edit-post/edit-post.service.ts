import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EditPostComponent } from './edit-post.component';
import { EditPostContent } from './edit-post.model';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class EditPostService{

server = 'http://127.0.0.1:8000/';
headers: Headers = new Headers;
options: any;

constructor(private __http: Http) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    this.options = new RequestOptions({headers: this.headers});
}

EditPost(EditPostContent:EditPostContent){
  const data = EditPostContent ;
  console.log(EditPostContent.postId);
  return this.__http.post(this.server + 'api/editPost/'+ `${EditPostContent.postId} `,JSON.stringify(data), this.options) ;
  }
}
