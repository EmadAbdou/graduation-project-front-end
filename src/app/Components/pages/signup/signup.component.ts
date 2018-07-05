import { Component, OnInit , Input } from '@angular/core';
import { RegUser } from './RegUser.model';
import { SignUpService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] ,
  providers:[SignUpService]
})
export class SignupComponent implements OnInit {

@Input() User:RegUser ;
name:string ;
email:string;
age:string;
password:string ;
c_password:string ;
city:string ;

  constructor(private SignUpService : SignUpService) { }

  ngOnInit() {
    this.User= new RegUser();
    this.User.name = this.name ;
    this.User.email = this.email ;
    this.User.age = this.age ;
    this.User.city = this.city ;
    this.User.password = this.password ;
    this.User.c_password = this.c_password ;
  }

  Register(User){
    this.SignUpService.Register(this.User).subscribe(
      data => console.log(this.User),
      err => console.log(err)
    )
} 
}
