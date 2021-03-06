import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {

  images: string[];
  constructor(private newsService: NewsService) { }

  getimages(): void {
    this.images = this.newsService.getImg();
  }
  ngOnInit() {
  this.getimages();
  }

}
