import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {
  images: string[] = ['https://i0.wallpaperscraft.com/image/wolf_light_forest_wild_calm_peace_51264_300x225.jpg',
    'http://www.modafinilsale.com/data/out/151/234297683-800x600-wallpapers.jpg',
    'http://www.visitgreece.gr/deployedFiles/StaticFiles/Photos/download/wallpapers/wallpapers_all_time_classic/balos_800x600.jpg'];
  popularImg: string[] = ['http://wallpaperscraft.ru/image/maldivy_tropiki_plyazh_palmy_leto_teplo_90784_800x600.jpg',
    'https://i0.wallpaperscraft.com/image/autumn_field_road_landscape_86231_300x225.jpg',
    'http://wfiles.brothersoft.com/s/sunflowers_world_hd_50167-800x600.jpg',
    'https://www.tokyoweekender.com/wp-content/uploads/2018/02/ghost-ship-small-800x600.jpg'];
  resentImg: string[] = ['http://computernewb.com/56k-image-loader/images/flowers.jpg',
    'http://www.firsthdwallpapers.com/uploads/2013/07/mac-os-x-lake_88093-800x600.jpg',
    'https://s-media-cache-ak0.pinimg.com/originals/68/dc/3a/68dc3a4601af72cf83a8132505f6d17a.jpg',
    'http://www.visit-montenegro.com/downloads/wallpaper-800x600-2.jpg'];
  followImg: string[] = ['http://solarhythmia.com/art-gallery/fractals/800x600/birth-of-a-galaxy-800x600.jpg',
    'https://cdn.dribbble.com/users/16727/screenshots/856896/glassearth-800-600_1x.png',
    'http://media.blizzard.com/sc2/media/wallpapers/wall001/wall001-large.jpg',
    'http://coolwallpaperz.info/user-content/uploads/wall/o/17/sharks-animal-shark-free-computer-90353.jpg',
    'https://secure.gravatar.com/avatar/86e9993c10007399a656c74e02252033?s=200&r=pg&d=https%3A%2F%2Fb6d3e9q9.ssl.hwcdn.net%2Fimg%2Fno-avatar-3.png',
    'http://www.fonditos3d.com/800x600/section-8.jpg'];
  constructor() { }
  getImages() {
    return this.images;
  }
  getpopularImg () {
    return this.popularImg;
  }
  getresentImg () {
    return this.resentImg;
  }
  getfollowImg () {
    return this.followImg;
  }

  i: number = 0;
  link: string = this.images[this.i];
  white: string = '';

  onclickRight() {
    if (this.i == this.images.length - 1) {
      this.i = 0;
      this.link = this.images[this.i];
    } else {
      ++this.i
      this.link = this.images[this.i];
    }

  }
  onclickLeft() {
    if (this.i === 0) {
      this.i = this.images.length - 1;
      this.link = this.images[this.i];

    } else {
      --this.i;
      this.link = this.images[this.i];
    }
  }
  circle1() {
    this.link = this.images[0];


  }
  circle2() {
    this.link = this.images[1];
    this.white = 'white';

  }
  circle3() {
    this.link = this.images[2];
    this.white = 'white';

  }
}
