import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any = []
  ph_tab: any = [{ date: "May 20, 2020", titre: "Romolu to stay at Real Nadrid?", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.", path: "assets/images/img_1.jpg" },
    { date: "May 20, 2020", titre: "Romolu to stay at Real Nadrid?", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.", path: "assets/images/img_2.jpg" },
    { date: "May 20, 2020", titre: "Romolu to stay at Real Nadrid?", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.", path: "assets/images/img_3.jpg" },
    { date: "May 20, 2020", titre: "Romolu to stay at Real Nadrid?", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.", path: "assets/images/img_3.jpg" }];

  constructor() { }

  ngOnInit() {
    this.getAllPlayers()
  }
  getAllPlayers() {
    this.players = JSON.parse(localStorage.getItem("players") || "[]")
  }
  deletPlayer(id:any) {
    console.log("parent", id)
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].id === id) {
        this.players.splice(i,1)
      }
      localStorage.setItem("players", JSON.stringify(this.players))
    }
    this.getAllPlayers()
  }
}
