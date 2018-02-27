import { Directive, ElementRef, HostListener, Input, Renderer, OnInit, AfterViewInit  } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {}
  myHidden: boolean = false;

  @HostListener('click') onClick() {
    if (this.myHidden) {
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropdown-content'), 'display', 'none');
    } else {
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('.dropdown-content'), 'display', 'block');
    }
    this.myHidden = !this.myHidden;
  }



}



