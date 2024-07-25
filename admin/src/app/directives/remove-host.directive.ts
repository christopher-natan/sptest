import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[remove-host]'
})
export class RemoveHostDirective implements OnInit{
  constructor(private el: ElementRef) {
  }
  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const  parentElement: any = nativeElement.parentElement;
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    parentElement.removeChild(nativeElement);
  }
}
