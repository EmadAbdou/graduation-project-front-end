import { Component, OnInit , Output , Input} from '@angular/core';
import { AddPostService } from './add-post.service';
import { AddPostContent } from './add-post.model' ;
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'] ,
  providers:[AddPostService]
})
export class AddPostComponent implements OnInit {
  constructor(private AddPostService : AddPostService ) {  }
  url : string  ;
  name : string  ;
  age : string  ;
  birth : string  ;
  city : string  ;
  status : string  ;
  description : string ;
  public formData = new FormData();

  ngOnInit() { 
    this.formData.append('url', this.url);
    this.formData.append('name', this.name);
    this.formData.append('age', this.age);
    this.formData.append('birth', this.birth);
    this.formData.append('city', this.city);
    this.formData.append('status', this.status);
    this.formData.append('description', this.description);
    }

      Add(){
        this.AddPostService.AddPost(this.formData);
        console.log(this.formData);
      }



  }
