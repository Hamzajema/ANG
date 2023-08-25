import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
path:any="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
