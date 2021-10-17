import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighting]'
})
export class HighlightingDirective {

  constructor(private elem:ElementRef) { }
  @HostListener('mouseenter') onMouseOver() {
    this.changeColor('purple');
  }

  @HostListener('mouseleave') onMouseOut() {
    this.changeColor(null); 
  }
  private changeColor(textColor: any) {
    this.elem.nativeElement.style.color = textColor;
  }

}
