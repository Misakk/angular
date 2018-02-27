import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {
  imglist: string[] = [
    'https://wallpapercave.com/wp/Fe3XMh0.jpg',
    'http://avante.biz/wp-content/uploads/Wallpapers-For-1920x1080/Wallpapers-For-1920x1080-008.jpg',
    'https://cdn.wallpapersafari.com/57/34/c2dCi9.jpg'
  ];
  constructor() { }
  getImg() {
    return this.imglist;
  }
}
