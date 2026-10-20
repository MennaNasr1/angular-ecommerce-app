import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShadow]',
  standalone:true,
})
export class ShadowDirective {

  constructor(private el:ElementRef , private render:Renderer2){}

  @HostListener('mouseenter')
  onMouseEnter(){
    this.render.addClass(this.el.nativeElement,'shadow-lg')
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.render.removeClass(this.el.nativeElement,'shadow-lg')
  }


}
