import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-player',
  templateUrl: './photo-player.component.html',
  styleUrls: ['./photo-player.component.css']
})
export class PhotoPlayerComponent implements OnInit {
  @Input() ph_player: any
  constructor() { }

  ngOnInit() {
  }

}
