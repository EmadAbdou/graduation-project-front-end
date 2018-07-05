import { Component, OnInit , ViewChild, HostListener , Output , Input } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { Profile } from 'selenium-webdriver/firefox';
import { Router , ActivatedRoute } from '@angular/router';
import { User } from './profile.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 
  constructor( private route: ActivatedRoute, private router: Router) { }

  @Input() User:User ;
  id:number ;
  url:string= '';
  name:string ;
  age:string ;
  city:string ;


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
    this.User = new User();
    this.User.name = this.name ;
    this.User.age = this.age ;
    this.User.city = this.city ;
    
    this.route.queryParams.subscribe(params => {
     this.User.name = params['name'] ;
     this.User.age = params['age'] ;
     this.User.city = params['city'] 
     });

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
