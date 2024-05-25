import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement) {
    const element = document.querySelector("href");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}