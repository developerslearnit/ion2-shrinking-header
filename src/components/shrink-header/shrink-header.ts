
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[shrink-header]',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class ShrinkHeader {

  header: any;
  headerHeight: any;
  translateAmt: any;
  
  constructor(public element: ElementRef, public renderer: Renderer) {

  }

  ngAfterViewInit() {      
    this.header = document.getElementsByTagName("ion-header")[0];
    this.headerHeight = this.header.clientHeight;
  }
 
  onContentScroll(ev) {
     ev.domWrite(() => {
            this.updateHeader(ev);
        });   
  }

  updateHeader(ev) {

    if (ev.scrollTop >= 0) {
      this.translateAmt = -ev.scrollTop / 2;
      
    } else {
       this.translateAmt =ev.scrollTop / 2;
    }

    this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0)');

  }


}
