import { Component, OnInit , Input } from '@angular/core';
import { EditProfileService } from './edit-profile.service';
import { EditProfile } from './edit-profile.model';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'] ,
  providers:[EditProfileService]
})
export class EditProfileComponent implements OnInit {

  constructor(private EditProfileService : EditProfileService , private route: ActivatedRoute,
    private router: Router) { }

    @Input() EditProfile:EditProfile ;
    id:number ;
    url:string ;
    name : string ;
    age : string ;
    city : string ;
    email : string ;
    password : string ;
    c_password : string ;

    ngOnInit() {
      this.EditProfile = new EditProfile();
      this.EditProfile.id= this.id ;
      this.EditProfile.name = this.name ;
      this.EditProfile.age = this.age ;
      this.EditProfile.url = this.url ;
      this.EditProfile.city = this.city ;
      this.EditProfile.email = this.email ;
      this.EditProfile.password = this.password ;
      this.EditProfile.c_password = this.c_password ;

      
      this.route.queryParams.subscribe(params => {
       this.EditProfile.id = params['id'] ;
       this.EditProfile.name = params['name'] ;
       this.EditProfile.age = params['age'] ;
       this.EditProfile.url = params['url'] ;
       this.EditProfile.city = params['city'] ;
       this.EditProfile.email = params['email'] ;
       this.EditProfile.password = params['password'] ;
       this.EditProfile.c_password = params['c_password'] ;

     });
  
     }
  
     readUrl(event:any) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
        reader.onload = (event:any) => {
          this.EditProfile.url = event.target.result;
        }
          reader.readAsDataURL(event.target.files[0]);
      }
    }
    
      Edit(EditProfile){
        this.EditProfileService.EditProfile(this.EditProfile).subscribe(
          data => console.log(this.EditProfile),
          err => console.log(err)
        )
     } 
  }
  