
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = "http://localhost:4000/api"


  constructor(private http: HttpClient) { }
  addUser(userObj) {
    return this.http.post(this.userUrl + "/sign-up", userObj);

  }
  login(userObj) {
    return this.http.post(this.userUrl + "/login", userObj);
  }
}
