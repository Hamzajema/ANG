import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: any
  @Output() newPlayer: EventEmitter<any> = new EventEmitter
  constructor() { }

  ngOnInit() {
  }
  passId(id: any) {
    console.log("hereeeeeeee", id);
    this.newPlayer.emit(id)

  }
}
