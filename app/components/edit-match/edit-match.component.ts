import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  id: any;
  findedMatch: any;
  editMatchForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private matchService: MatchService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    // let matches = JSON.parse(localStorage.getItem("matches") || "[]");
    // this.findedMatch= matches.find((obj) => { return obj.id == this.id });
    this.matchService.getMatchById(this.id).subscribe((res) => {
      this.findedMatch = res;
    })

  }
  editMatch() {
    this.matchService.editMatch(this.findedMatch).subscribe((res) => {
      console.log("here res sfter edit ", res);
    });
  }
}
