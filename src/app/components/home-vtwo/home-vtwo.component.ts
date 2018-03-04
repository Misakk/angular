import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-home-vtwo',
  templateUrl: './home-vtwo.component.html',
  styleUrls: ['./home-vtwo.component.css']
})
export class HomeVtwoComponent implements OnInit {
  images: string[];
  constructor(private newsService: NewsService) { }
  getimages(): void {
    this.images = this.newsService.getimageListForhomevtwo();
  }
  ngOnInit() {
    this.getimages();
  }

}
