import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  id: any;
  findedPlayer: any;
  infoPlayerForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    let players = JSON.parse(localStorage.getItem("players") || "[]");
    this.findedPlayer = players.find((obj) => { return obj.id == this.id });
  }
  infoPlayer() {

  }
}
