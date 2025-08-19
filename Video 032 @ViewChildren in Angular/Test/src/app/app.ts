import { Component, ElementRef, signal, ViewChild , ViewChildren, QueryList} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Test');
  fullName: string='';

  // @ViewChild('inputEl') inputElements: ElementRef;
  @ViewChildren('inputEl') inputElements: QueryList<ElementRef>;

  show()
  {
    // console.log(this.inputElements.nativeElement);

    let name='';
    this.inputElements.forEach(
      (el)=>{
        name += el.nativeElement.value + ' ';
      }
    )

    this.fullName = name.trim();
  }
}
