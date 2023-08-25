import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cup-event',
  templateUrl: './cup-event.component.html',
  styleUrls: ['./cup-event.component.css']
})
export class CupEventComponent implements OnInit {
  title: any = "Hamza"
  currentDate=Date.now()
  constructor() { }

  ngOnInit(): void {
  }

}
