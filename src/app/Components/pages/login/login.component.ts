import { Component, OnInit, Input } from '@angular/core';
import { LogedUser } from './logedUser.model';
import { LogInService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] ,
  providers:[LogInService]
})

export class LoginComponent implements OnInit {

  @Input() User:LogedUser ;
  email:string;
  password:string ;

  constructor(private LogInService : LogInService) { }

  ngOnInit() {
    this.User= new LogedUser();
    this.User.email = this.email ;
    this.User.password = this.password ;

  }
  Login(User){
    this.LogInService.Login(this.User).subscribe(
      data => console.log(this.User),
      err => console.log(err)
    )
} 


 
}