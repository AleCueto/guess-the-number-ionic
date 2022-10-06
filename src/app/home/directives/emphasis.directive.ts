import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmphasis]'
})
export class EmphasisDirective {

  constructor(private el:ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.setGood();
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.setBad();
  }

  private setGood()
  {
    this.el.nativeElement.style.backgroundColor = "green";
    this.el.nativeElement.style.color = "white";
  }
  
  private setBad()
  {
    this.el.nativeElement.style.backgroundColor = "";
    this.el.nativeElement.style.color = "black";
  }

  

}
