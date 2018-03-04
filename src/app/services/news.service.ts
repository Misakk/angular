import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {
  imglist: string[] = [
    'https://wallpapercave.com/wp/Fe3XMh0.jpg',
    'http://avante.biz/wp-content/uploads/Wallpapers-For-1920x1080/Wallpapers-For-1920x1080-008.jpg',
    'https://cdn.wallpapersafari.com/57/34/c2dCi9.jpg'
  ];
  imageListForhomevtwo: string[] = [
    'https://www.thedaftclub.com/downloads/wallpapers/daftpunk_wallpaper4_800x600.jpg',
    'http://mixstuff.ru/wp-content/uploads/2012/09/98805-800x600.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZf51bydURzv92Y1wf4cXxtOZl6cBpxtJtcWxDZFwDIuAqYTd4A',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPFvfIWCgiQAOidvxo1tvKw68gi1semXP2_O9aTNwiy6TnGxJfg',
    'https://cdn.wallpapersafari.com/34/82/kEPMa2.jpg',
    'http://www.picamon.com/wp-content/uploads/2014/12/funny-flaming-cat-4-k-wallpaper.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2F3OLTPI1O9vQnZQr-8kN7rtadFpjtWIJKl2m5PZoFy3ddqfrww',
    'https://i0.wallpaperscraft.com/image/space_sky_stars_79233_300x225.jpg',
    'https://wallpaperscraft.com/image/cat_face_glasses_thick_65455_800x600.jpg',
    'https://avante.biz/wp-content/uploads/800x600-Wallpapers/800x600-Wallpapers-002.jpg'
  ];
  constructor() { }
  getImg() {
    return this.imglist;
  }
  getimageListForhomevtwo() {
    return this.imageListForhomevtwo;
  }
}
