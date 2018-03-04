import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-postv-article',
  templateUrl: './postv-article.component.html',
  styleUrls: ['./postv-article.component.css'],
})
export class PostvArticleComponent implements OnInit {
  images: string[];
  popularImg: string[];
  resentImg: string[];
  followImg: string[];
  image: string;
  constructor(private articleService: ArticleService) { }
  getimages(): void {
    this.images = this.articleService.getImages();
  }
  getpopularImg() {
    this.popularImg = this.articleService.getpopularImg();
  }
  getresentImg() {
    this.resentImg = this.articleService.getresentImg();
  }
  getfollowImg() {
    this.followImg = this.articleService.getfollowImg();
  }

  ngOnInit() {
    this.getimages();
    this.getpopularImg();
    this.getresentImg();
    this.getfollowImg();
  }


}
