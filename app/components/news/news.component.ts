import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  Tab: any = [{}, {}, {}];
  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  setCount() {

    this.count = this.count + 1
  }

}
