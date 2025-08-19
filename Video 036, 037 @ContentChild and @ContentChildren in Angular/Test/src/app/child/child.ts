import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { Test } from '../test/test';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @ContentChild('para')
  paraEl: ElementRef;

  @ContentChild(Test)
  testEl: Test;

  @ContentChildren('para')
  paraEls: QueryList<ElementRef>;

  @ContentChildren(Test)
  testEls: QueryList<Test>;

  showChildDetails()
  {
    // *** Accessing the first found element.
    // console.log(this.paraEl.nativeElement.textContent);
    // console.log(this.testEl.name);


    // *** Accessing the multiple found elements.
    this.paraEls.forEach(
      (el)=>{
        console.log(el.nativeElement.textContent);
      }
    );

    this.testEls.forEach(
      (el)=>{
        console.log(el.name);
      }
    );
  }
}
