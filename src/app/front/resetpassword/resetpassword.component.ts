import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/front/service/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  
  msg = '';
  form: any = {};
  email!: string;
  constructor(private userservice: UserService
   )
     { 
      this.email = "";
    }

  
    ngOnInit(): void {
      
    }

    siteKey: string = "6LcJ-uAaAAAAAGBErzdOuBQgSTZoBdDWN4cyWeSR";
    forgotPassword() {
      this.userservice.forgotPassword(this.email).subscribe(
        data => {
          console.log(data)
          //this.toastr.success('Hello world!', 'Toastr fun!');
          this.msg = 'Mail Sended Succesfully';
          this.email = "";
        },
        error => {
          console.log(error)
          this.msg = 'cannot found user with this email';
          this.email = "";
        });
    }
  
    

  }


