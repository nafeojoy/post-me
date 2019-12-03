import { Directive, ElementRef, HostListener, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRedBlack]'
})
export class RedBlackDirective {

  constructor(private el: ElementRef, private rendered: Renderer) {
    el.nativeElement.style.color = "Red";
   }

   //HostBinding Method Decorator
   @HostBinding('style.border') border: string;

   //HostListener Method Decorator
   @HostListener('click') doSomething(){
     //alert('It worked');
     this.el.nativeElement.style.color = "Blue";
     this.border = '5px solid green';
   }




}
