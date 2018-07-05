import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HomeComponent } from './home.component';
import { PostContent } from './post.model';
import { Comment } from './comment.model';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GetPostDataService{
constructor(private __http: Http) {}

Posts=[];
Comments=[];
getDataObservable(url:string) {
    return this.__http.get(url)
        .map(data => // {
            data.json());
} 

getComments(url:string) {
    return this.__http.get(url)
        .map(data => // {
            data.json());
} 

}
