import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-tab',
  templateUrl: './players-tab.component.html',
  styleUrls: ['./players-tab.component.css']
})
export class PlayersTabComponent implements OnInit {
playerstab: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.playerstab = JSON.parse(localStorage.getItem("players") || "[]");

  }
  goToEdit(id) {
    this.router.navigate(["edit-player/" + id])
  }
  goToDisplay(id) {
    this.router.navigate(["player-info/" + id])
  }
}
