import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-v2container',
  templateUrl: './v2container.component.html',
  styleUrls: ['./v2container.component.css'],
  animations: [

    trigger('movePanel', [
      transition('inactive <=> active', [
        animate(500, keyframes([
          style({opacity:0.5, offset:0}),
          style({opacity:1, offset:1}),
        ]))
      ])

    ])
  ]
})
export class V2containerComponent implements OnInit {
  state = 'inactive';
  i = 0;
  images: string[] = ['https://cdn.wallpapersafari.com/6/85/L9ZKvP.jpg',
  'http://www.tokkoro.com/picsup/2839296-bridge-river-water-landscape-photography-sky-ship-mountain___landscape-nature-wallpapers.jpg',
    'http://longwallpapers.com/Desktop-Wallpaper/night-mountain-wallpapers-wide-For-Desktop-Wallpaper.jpg'
  ];
  image: string;
  constructor() { }

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
    this.circle1();
    this.circle2();
    this.circle3();
    this.onclickLeft();
    this.onclickRight();
    this.toggleFromUp();
  }

}
