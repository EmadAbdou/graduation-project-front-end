import { Component, OnInit , Input } from '@angular/core';
import { EditPostService } from './edit-post.service';
import { EditPostContent } from './edit-post.model';
import { Router , ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'] ,
  providers:[ EditPostService]

})
export class EditPostComponent implements OnInit {

  constructor(private EditPostService : EditPostService , private route: ActivatedRoute,
    private router: Router) { 
     }

    

  @Input() EditPostContent:EditPostContent ;
  id:number ;
  url:string= './assets/imgs/placeHolder.png';
  name:string ;
  age:string ;
  birth:string ;
  city:string ;
  status:string ;
  description:string ;


  ngOnInit() {
    this.EditPostContent = new EditPostContent();
    this.EditPostContent.postId = this.id ;
    this.EditPostContent.name = this.name ;
    this.EditPostContent.age = this.age ;
    this.EditPostContent.birth = this.birth ;
    this.EditPostContent.city = this.city ;
    this.EditPostContent.status = this.status ;
    this.EditPostContent.description = this.description ;
    this.EditPostContent.url =  this.url ; 
    
    this.route.queryParams.subscribe(params => {
     this.EditPostContent.postId = params['id'] ;
     this.EditPostContent.name = params['name'] ;
     this.EditPostContent.age = params['age'] ;
     this.EditPostContent.birth = params['birth'] ;
     this.EditPostContent.city = params['city'] ;
     this.EditPostContent.status = params['status'] ;
     this.EditPostContent.description = params['description'] ;
     this.EditPostContent.url = params['url'] ;
   });

   }

   readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        this.EditPostContent.url = event.target.result;
      }
        reader.readAsDataURL(event.target.files[0]);
    }
  }
  
    Edit(EditPostContent){
      this.EditPostService.EditPost(this.EditPostContent).subscribe(
        data => console.log(this.EditPostContent),
        err => console.log(err)
      )
   } 
}
