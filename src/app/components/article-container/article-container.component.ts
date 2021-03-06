import { Component, OnInit, trigger, state, style, transition, animate, keyframes  } from '@angular/core';
import { ArticleService } from '../../services/article.service';


@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.css'],
  animations: [

    trigger('movePanel', [
      transition('inactive <=> active', [
        animate(1000, keyframes([
          style({opacity:0, transform: 'translateY(-200px)', offset:0}),
          style({opacity:1, transform: 'translateY(25px)', offset:0.75}),
          style({opacity:1, transform: 'translateY(0)', offset:1}),
        ]))
      ])

    ])
  ]
})
export class ArticleContainerComponent implements OnInit {
  i = 0;
  images: string[];
  popularImg: string[];
  resentImg: string[];
  followImg: string[];
  image: string;
  state = 'inactive';
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


  onclickRight() {
    if (this.i === this.images.length - 1) {
      this.i = 0;
      return this.image = this.images[this.i];
    } else {
      ++this.i;
      return this.image = this.images[this.i];
    }

  }
  onclickLeft() {
    if (this.i === 0) {
      this.i = this.images.length - 1;
      return this.image = this.images[this.i];

    } else {
      --this.i;
      return this.image = this.images[this.i];
    }
  }
  circle1() {
    return this.image = this.images[0];
    }
  circle2() {
    return this.image = this.images[1];
    }
  circle3() {
    return this.image = this.images[2];
    }
  toggleFromUp() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');

  }


  ngOnInit() {
    this.getimages();
    this.getpopularImg();
    this.getresentImg();
    this.getfollowImg();
    this.circle1();
    this.circle2();
    this.circle3();
    this.onclickLeft();
    this.onclickRight();
    this.toggleFromUp();
  }


}
