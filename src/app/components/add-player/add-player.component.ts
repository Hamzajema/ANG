import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  addPlayerForm: FormGroup
  player: any = {}
  constructor(private router: Router) { }

  ngOnInit() {
  }
  addPlayer() {
    let T = JSON.parse(localStorage.getItem("players") || "[]")
    let playerId = JSON.parse(localStorage.getItem("playerId") || "0")
    this.player.id = playerId
    T.push(this.player)
    localStorage.setItem("players", JSON.stringify(T))
    localStorage.setItem("playerId", JSON.stringify(playerId + 1))
    //  console.log("here ",this.player);


    this.router.navigate(['/players'])


  }
}
