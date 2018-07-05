import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AddPostComponent } from './add-post.component';
import { AddPostContent } from './add-post.model' ;
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AddPostService{


server = 'http://localhost:8000/';
headers: Headers = new Headers;
options: any;

constructor(private _http: Http) {
   // this.headers.append('Content-Type','multipart/form-data; boundary=----xruiitFormooundary7MA4YpxkTmZu0gW');//'application/json');//'multipart/form-data; boundary=----jhkjgjygwrqwjhhw'); //'application/x-www-form-urlencoded') ;//
   // this.headers.append('X-Requested-With', 'XMLHttpRequest');
   // this.options = new RequestOptions({headers: this.headers});
}

 AddPost(formData) {
  console.log(formData);
  let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.server + 'api/upload', {
      'data': formData
    }).toPromise()
       .then(response => {
         console.log(response);
       })
       .catch(error => {
         console.log(error);
       });

  }

   private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}


