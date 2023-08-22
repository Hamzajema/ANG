import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addLoginForm: FormGroup
  user: any = {}

  constructor(private router: Router, private usreService: UserService) { }

  ngOnInit(): void {
  }

  // addMatch() {
  //   let T = JSON.parse(localStorage.getItem("matches") || "[]")
  //   let matchId = JSON.parse(localStorage.getItem("matchId") || "0")
  //   this.match.id = matchId
  //   T.push(this.match)
  //   localStorage.setItem("matches", JSON.stringify(T))
  //   localStorage.setItem("matchId", JSON.stringify(matchId + 1))
  //   //  console.log("here ",this.match);


  //   this.router.navigate(['/matches'])


  // }
  login() {
    console.log("here user ", this.user);
    this.usreService.login(this.user).subscribe((res) => {
      console.log("here res sfter login ", res);
      this.router.navigate(["/matches"])
    });
  }

}
