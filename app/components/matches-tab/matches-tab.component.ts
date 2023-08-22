import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-tab',
  templateUrl: './matches-tab.component.html',
  styleUrls: ['./matches-tab.component.css']
})
export class MatchesTabComponent implements OnInit {
  matchestab: any = [];
  constructor(private router: Router, private matchService: MatchService) {

  }

  ngOnInit() {
    // this.matchestab = JSON.parse(localStorage.getItem("matches") || "[]");
    this.matchService.getAllMatches().subscribe((res) => {
      this.matchestab = res;
    });
  }
  goToEdit(id) {
    this.router.navigate(["edit-match/" + id])
  }
  goToDisplay(id) {
    this.router.navigate(["match-info/" + id])
  }
  deleteMatch(id) {
    this.matchService.deleteMatchById(id).subscribe((res) => {
      console.log("here res after delete ", res);
    });
  }
}
