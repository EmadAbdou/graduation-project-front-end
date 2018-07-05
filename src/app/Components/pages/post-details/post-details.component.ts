import { Component, OnInit , ViewChild, HostListener , Output  } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor() { }

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


  ngOnInit() {
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
