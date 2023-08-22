import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() match: any
  @Output() newMatch:EventEmitter<any>=new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }


  compare(a: any, b: any) {
    if (Number(a) > Number(b)) {
      return ["Win",'green']
    } else if (Number(a) < Number(b)) {
      return ["Loss",'blue']

    } else {
      return ["Draw",'yellow']

    }

  }
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
  toggle = true; // start with true == shortDate

  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }

  toggleFormat() { this.toggle = !this.toggle; }


  passId(id: any) {
  console.log("hereeeeeeee",id);
    this.newMatch.emit(id)

  }
}
