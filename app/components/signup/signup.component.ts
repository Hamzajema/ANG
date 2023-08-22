import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private usreService: UserService,private route:Router) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.minLength(3), Validators.required]],
      lastName: ["" ,  [Validators.minLength(3), Validators.required]],
      email: ["" ,  [Validators.email, Validators.required]],
      password: ["",[Validators.minLength(3), Validators.required]],
      cPassword: [""],

    },
    {
      validators:MustMatch("password","cPassword")
    }
    )

  }
  signup() {
    console.log(this.signupForm.invalid);
    this.usreService.addUser(this.signupForm.value).subscribe((res) => {
      this.route.navigate(["/login"]);
    });
  }



}
