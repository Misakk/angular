import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';


@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.css']
})
export class ArticleContainerComponent implements OnInit {
  images: string[];
  popularImg: string[];
  resentImg: string[];
  followImg: string[];


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
