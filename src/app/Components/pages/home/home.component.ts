import { Component, OnInit , ViewChild, HostListener , Output , Input} from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { Profile } from 'selenium-webdriver/firefox';
import { PostContent } from './post.model';
import { Comment } from './comment.model';
import { GetPostDataService } from './get-post-data.service' ;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] ,
  providers:[GetPostDataService]
})
export class HomeComponent implements OnInit {
  public arrayOfKeys;

  constructor(private GetPostDataService : GetPostDataService ){
    if(this.arrayOfKeys != null){
    this.arrayOfKeys = Object.keys(this.Posts);
    }
    
  }

  @Output() likeColor = 'white' ;
  @Output() likeBtnClicked = 0 ;
  @Output() comment = 'none';
  @Output() commentAdded = 'none';
  @Output() cmntBtnClicked = 0 ;
  @Output() likes = 0 ;
  @Output() comments = 0 ;
  @Output() commentText = '';
  @Output() profileName = 'Emad';
  @Output() profileImg = "http://via.placeholder.com/40x40";
  @Output() commentsText = [];
  i:number = 0 ;


  private dataUrl = 'http://localhost:8000/api/getposts';  // URL to web api
  private CommentsUrl = 'http://localhost:8000/api/addComment';  // URL to web api
  Posts:PostContent[];
  Comments:Comment[];

  ngOnInit() {
    this.GetPostDataService.getDataObservable(this.dataUrl).subscribe(
      data => {
        this.Posts = data ; 
      }
    );
    this.GetPostDataService.getComments(this.CommentsUrl).subscribe(
      data => {
        this.Comments = data ; 
      }
    );
  } 


  like(){

    if(this.likeBtnClicked  == 0){
      this.likeColor= 'blue';
      this.likes ++ ;
    }else {
      this.likeColor = 'white';
      this.likes --;
    }
    this.likeBtnClicked = 1-this.likeBtnClicked ;

  }
  
  
  showComment (){
    if(this.cmntBtnClicked  == 0){
      this.comment = 'block';
    }else {
      this.comment = 'none';
    }
    this.cmntBtnClicked  = 1-this.cmntBtnClicked ;
  }

  addComment(event) {
    if (event.key === "Enter") {
      console.log(event);
      this.commentAdded = 'block';
      this.comments ++;
      this.commentsText.push(this.commentText);
      this.commentText += (this.commentsText[this.i]);
      this.i++;
      this.commentText = '';
    }
  }

 

   
  
  

}

