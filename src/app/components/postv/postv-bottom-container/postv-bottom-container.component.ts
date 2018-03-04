import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postv-bottom-container',
  templateUrl: './postv-bottom-container.component.html',
  styleUrls: ['./postv-bottom-container.component.css']
})
export class PostvBottomContainerComponent implements OnInit {
images: string[] = [
  'http://s1.1zoom.me/b5353/993/Big_cats_Lions_Snout_Glance_542288_800x600.jpg',
  'https://img-fotki.yandex.ru/get/904305/127908635.2368/0_1fa745_7f899225_XL',
  'http://atapaski.ru/resources/img/crop/DSC_2852_EC_Avangard_Black_Husky_Jan_2015jpg/800x600.png'
];
  constructor() { }

  ngOnInit() {
  }

}
