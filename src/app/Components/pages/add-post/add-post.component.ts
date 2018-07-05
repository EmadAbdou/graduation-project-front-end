import {
    Component,
    OnInit,
    Output,
    Input
} from '@angular/core';
import {
    AddPostService
} from './add-post.service';
import {
    AddPostContent
} from './add-post.model';
import {
    NgForm
} from '@angular/forms';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http} from '@angular/http';
import {ElementRef} from '@angular/core';
import {ViewChild} from '@angular/core';



@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css'],
    providers: [AddPostService]
})
export class AddPostComponent implements OnInit {
    constructor(private addPostService: AddPostService, private _http: Http) {}
    name: string;
    age: string;
    birth: string;
    city: string;
    status: string;
    description: string;
    headers: any;
    @ViewChild('avatar') avatar: ElementRef;

    apiEndPoint: any = 'http://localhost:8000/api/upload';
    onSubmit() {
        const formData = new FormData();
        formData.append('avatar',
                        this.avatar.nativeElement.files[0],
                        this.avatar.nativeElement.files[0].name);

        this.headers = new HttpHeaders();
        this.headers.append('Content-Type', 'multipart/form-data');
        this.headers.append('Accept', 'application/json');
        this._http.post('http://localhost:8000/api/upload', formData, {headers: this.headers})
            .subscribe(
                (response) => {
                },
                (error) => {
                }
             );
        // let fileList: FileList = event.target.files;
        // console.log(fileList)
        // if (fileList.length > 0) {
        //     let file: File = fileList[0];
        //     let formData: FormData = new FormData();
        //     formData.append('uploadFile', file, file.name);
        //     console.log(formData);
        //     this.headers = new Headers();
        //     /** In Angular 5, including the header Content-Type can invalidate your request */
        //     this.headers.append('Content-Type', 'multipart/form-data');
        //     this.headers.append('Accept', 'application/json');
        //     let options = new RequestOptions({
        //         headers: this.headers
        //     });
        //     this._http.post(`${this.apiEndPoint}`, formData, options)
        //         .map(res => res.json())
        //         .subscribe(
        //             data => console.log(data),
        //             error => console.log(error)
        //         )
        // }
    }

    ngOnInit() {

    }

    Add(file) {
        this.addPostService.AddPost(file);
    }



}
