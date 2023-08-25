import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  addMatchForm : FormGroup
  match: any = {}
  title='ADD Match'
  constructor(private router: Router, private matchService: MatchService) { }

  ngOnInit(): void {
  }

  addMatch() {
    // let T = JSON.parse(localStorage.getItem("matches") || "[]")
    // let matchId = JSON.parse(localStorage.getItem("matchId") || "0")
    // this.match.id = matchId
    // T.push(this.match)
    // localStorage.setItem("matches", JSON.stringify(T))
    // localStorage.setItem("matchId", JSON.stringify(matchId + 1))
     console.log("here ",this.match);
    this.matchService.addMtch(this.match).subscribe((res) => { console.log("here response from BE", res); });

    // this.router.navigate(['/matches'])


  }

}
